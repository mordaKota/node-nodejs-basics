import { spawn } from 'node:child_process';
import path from 'path';
import { fileURLToPath } from 'url';

export const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  
  const child = spawn('node', [path.join(__dirname, 'files', 'script.js')], { shell: true });
  
  process.stdin.on('data', (chunk) => {
    child.stdin.write(chunk);
  });
  child.stdout.on('data', (response) => console.log(`${response}`))
};

spawnChildProcess();