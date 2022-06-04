import { rm, access } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';


export const remove = async () => {
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

  if (!await isFileExists ('fileToRemove.txt')) {
    console.log("FS operation failed")
  } else {
    await rm(path.join(__dirname, 'files', 'fileToRemove.txt'))
  }
};

remove();