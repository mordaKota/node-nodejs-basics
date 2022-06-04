//Example: node .\src\cli\args.js --cat purr --dog bark

export const parseArgs = () => {
  let output = [];
  const arrOfArgs = process.argv.slice(2); 
  for (let i = 0; i < arrOfArgs.length; i++) {
    if (arrOfArgs[i].indexOf('--') === 0) {
      output.push(arrOfArgs[i].substring(2, arrOfArgs[i].length) + " is " + arrOfArgs[i + 1]);
    }
  }
  console.log(output);
};

parseArgs();