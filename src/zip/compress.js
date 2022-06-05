import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const gzip = createGzip();
  const source = createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
  const destination = createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
  await pipeline(source, gzip, destination);
};

compress();