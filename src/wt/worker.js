import { workerData, parentPort } from "worker_threads";

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  // console.log('Got data from parent:' + workerData);
  // console.log(nthFibonacci(workerData));
  
  try {
    const data = nthFibonacci(workerData);

    parentPort.postMessage(JSON.stringify({ status: 'resolved', data }));
  } catch (error) {
    parentPort.postMessage(JSON.stringify({ status: 'error', data: null }));
  }
  
  // parentPort.postMessage('Hello parent the result is:' + result);


  // parentPort.on('message', msg => {
  //   console.log('Message from parent:', msg);
  // })
};

sendResult();

