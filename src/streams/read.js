import { createReadStream } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  createReadStream(path.join(__dirname, 'files', 'fileToRead.txt')).pipe(process.stdout)
};

read();