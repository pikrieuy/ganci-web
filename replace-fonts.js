import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.html')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.push('./index.html');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('font-playfair') || content.includes('font-nunito')) {
    content = content.replace(/font-playfair/g, 'font-sans').replace(/font-nunito/g, 'font-sans');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
