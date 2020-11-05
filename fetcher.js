const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0].toString();
const file = args[1].toString();

request(url, (error, response, body) => {
  if (!error)
    console.log("Connected!");
  fs.writeFile(file, body, (err) => {

    const stats = fs.statSync(file);
    if (err)
      console.log(err);
    console.log(`Downloaded and saved ${stats.size} bytes to ${file}`);
  });
});

