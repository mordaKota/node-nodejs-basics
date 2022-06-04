import { rename as fsRename, access } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const rename = async () => {
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

  if (await isFileExists('wrongFilename.txt') === false || await isFileExists('properFilename.md' === true)) {
    console.log('FS operation failed');
  } else {
    await fsRename(path.join(__dirname, 'files', 'wrongFilename.txt'), path.join(__dirname, 'files', 'properFilename.md'));
  }
};

rename();