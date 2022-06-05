import { readFile, access } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const isFileExists = async (filename) => {
    try {
      await access(path.join(__dirname, 'files', filename));
    } catch {
      return false;
    }
    return true;
  }
  if (await isFileExists('fileToRead.txt')) {
    const output = await readFile(path.join(__dirname, 'files', 'fileToRead.txt'));
    console.log(output.toString());
  } else {
    console.log('FS operation failed');
  }
};

read();