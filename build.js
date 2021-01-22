const fs = require('fs');
const path = require('path');
const config = require('./config');

const compress = config.compress;
const replacers = config.replacers;

// PATH TO THE ORIGINAL HTML FILE:
const filePath = path.join(__dirname, 'src/index.html');

// REGEXP REPLACEMENT LOGIC:
const regexp = /replaceSrc="([a-zA-Z]+)".+?(src="[^"]+")(?:\s+?(alt="[^"]*"))?/g;

function replacer(match, p1, p2, p3) {
  return p2.replace(/src="[^"]+"/, 'src="' + replacers[p1].url + '"') + (p3 ? ' alt="' + replacers[p1].alt + '"' : '');
}

function compressString(string) {
  // When global compress is true comments are removed and also any breakline and extra whitespaces.
  return compress ? string.replace(/<!--[\s\S]*?-->/g, '').replace(/\r+\s*/g, '') : string;
}

// READ, REPLACE AND WRITE THE FILE:
fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
  if (!err) {
    // Extracting the required fragment and optionally compressing it.
    const htmlFragment = compressString(data.match(/<!-- EXTRACT -->([\s\S]*)<!-- EXTRACT -->/)[1].trim());

    const finalHtml = htmlFragment.replace(regexp, replacer);

    fs.writeFile('./dist/landsWebHome.html', finalHtml, err => {
      if (err) throw err;
      console.log('File created successfully.');
    });
  } else {
    console.log(err);
  }
});