import fs from 'fs/promises';
import { writeFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const create = async () => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const isFileExists = async (filename) => {
    try {
      await fs.access(path.join(__dirname, 'files', filename));
    } catch {
      return false;
    }
    return true;
  }

  if (await isFileExists ('fresh.txt')) {
    console.log("FS operation failed")
  } else {
    const data = new Uint8Array(Buffer.from('I am fresh and young'));
    const promise = writeFile(path.join(__dirname, 'files', 'fresh.txt'), data);
    await promise;
  }

};

create();