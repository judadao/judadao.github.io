import { readFile } from 'node:fs/promises';

const pdf = await readFile('public/assets/English_CV.pdf');
const text = pdf.toString('latin1');

if (!text.startsWith('%PDF')) {
  throw new Error('Resume file is not a valid PDF');
}

const pageObjectCount = (text.match(/\/Type\s*\/Page\b/g) ?? []).length;

if (pageObjectCount !== 1) {
  throw new Error(`Resume PDF must be one page, found ${pageObjectCount}`);
}

console.log('Resume PDF is valid and one page.');
