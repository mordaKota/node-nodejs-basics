import { Worker } from "worker_threads";
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

export const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const numOfCpus = os.cpus().length
  let output = [];

  const promises = [];

  for(let i = 0; i < numOfCpus; i++) {
    const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: (10 + i) });
    let resolve = null;

    const promise = new Promise((res) => {
      resolve = res; 
    });
    promises.push(promise);

    worker.on('message', msg => {
      const data = JSON.parse(msg);
      output.push(data);
      resolve();
    })
  }
  await Promise.all(promises);
  console.log(output);
};

performCalculations();