const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src/app');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Add import if not exists, but only if we make a replacement
  const importStatement = `import { BookConsultationButton } from "@/components/ui/book-consultation-button"`;
  
  // Replace:
  // <Button ... asChild>
  //   <Link href="/contact">
  //     Book a Free Consultation
  //     <ArrowRight ... />
  //   </Link>
  // </Button>
  // 
  // with <BookConsultationButton showArrow />
  
  // To be safe, we'll just replace the specific block found in most places.
  // We can just use a regex that looks for Book a Free Consultation inside a Link to /contact.
  
  const regex1 = /<Button([^>]*)asChild([^>]*)>\s*<Link href="\/contact">\s*Book a Free Consultation\s*<ArrowRight([^>]*)\/>\s*<\/Link>\s*<\/Button>/g;
  if (regex1.test(content)) {
    content = content.replace(regex1, `<BookConsultationButton$1$2 showArrow />`);
    changed = true;
  }

  const regex2 = /<Button([^>]*)asChild([^>]*)>\s*<Link href="\/contact">Book a Free Consultation<\/Link>\s*<\/Button>/g;
  if (regex2.test(content)) {
    content = content.replace(regex2, `<BookConsultationButton$1$2 />`);
    changed = true;
  }
  
  const regex3 = /<Button([^>]*)asChild([^>]*)>\s*<Link href="\/contact">Book Consultation<\/Link>\s*<\/Button>/g;
  if (regex3.test(content)) {
    content = content.replace(regex3, `<BookConsultationButton$1$2>Book Consultation</BookConsultationButton>`);
    changed = true;
  }

  // Replace <Link href="/contact">Book a Free Consultation <ArrowRight... /></Link> that are NOT in a button
  // (Not common but just in case)
  
  if (changed) {
    if (!content.includes('BookConsultationButton')) {
      // Find last import
      const lastImport = content.lastIndexOf('import ');
      if (lastImport !== -1) {
        const endOfLine = content.indexOf('\n', lastImport);
        content = content.slice(0, endOfLine + 1) + importStatement + '\n' + content.slice(endOfLine + 1);
      } else {
        content = importStatement + '\n' + content;
      }
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
