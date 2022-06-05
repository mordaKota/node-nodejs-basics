import { mkdir, readdir, copyFile, access } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const copy = async () => {
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

  if (await isFolderExists('files-copy')) {
    console.log ("FS operation failed");
  } else {
    await mkdir(path.join(__dirname, 'files-copy'));
    const fileNames = await readdir(path.join(__dirname, 'files'));
    await Promise.all(
      fileNames.map(n => copyFile(path.join(path.join(__dirname, 'files'), n), path.join(path.join(__dirname, 'files-copy'), n)))
    );
  }
};

copy();