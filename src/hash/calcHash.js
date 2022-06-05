import { readFile } from 'node:fs/promises';
const { createHash } = await import('node:crypto');
import path from 'path';
import { fileURLToPath } from 'url';

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const content = await readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
  const string = content.toString();
  const hash = createHash('sha256');
  hash.update(string);
  console.log(hash.digest('hex'));
};

calculateHash();