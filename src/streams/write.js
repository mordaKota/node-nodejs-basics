import { createWriteStream } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename); 
  let writeStream = createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt')); 
  process.stdout.write('Please add some text to save it in fileToWrite.txt \n');
  process.stdin.on('data', chunk => writeStream.write(chunk));
};

write();
