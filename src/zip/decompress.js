import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const gzip = createGunzip();
  
  const source = createReadStream(path.join(__dirname, 'files', 'archive.gz'));
  const destination = createWriteStream(path.join(__dirname, 'files', 'fileToCompress2.txt'));
  
  await pipeline(source, gzip, destination);
};

decompress();