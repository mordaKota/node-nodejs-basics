import {readdir, access } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const isFolderExists = async (folder) => {
    try {
      console.log(__dirname);
      await access(path.join(__dirname, folder));
    } catch {
      return false;
    }
    return true;
  }

  if (!await isFolderExists('files')) {
    console.log ("FS operation failed");
  } else {
    const fileNames = await readdir(path.join(__dirname, 'files'));
    console.log(fileNames);
  }
};

list();