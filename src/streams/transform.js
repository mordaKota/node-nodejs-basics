import { pipeline, Transform } from 'node:stream';

export const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, enc, callback) {
      const reversedChunk = chunk.toString().trim().split("").reverse().join('');
      callback(null, reversedChunk+ '\n');
    }
  });
  
  pipeline(
    process.stdin,
    transformStream,
    process.stdout,
    error => { console.log(error);}
  );
}

transform();