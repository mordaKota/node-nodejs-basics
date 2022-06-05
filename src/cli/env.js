//PowerShell: $env:RSS_PRODUCTION="true"; $env:RSS_TEST="false"; node .\src\cli\env.js
//Bash: RSS_PRODUCTION="true"; RSS_TEST="false"; node .\src\cli\env.js

export const parseEnv = () => {
  const isRss = (key) => {
    return key.indexOf('RSS_') === 0;
  }
  let output = [];
  Object.keys(process.env)
    .filter(isRss)
    .forEach(key => {
      output.push(key + "=" + (process.env[key]));
    });
    console.log(output.join("; "));
};

parseEnv();