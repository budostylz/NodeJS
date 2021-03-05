const fs = require('fs');
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Shaun';
data.planet = 'Neptune';
data.age = 42;

const updatedJSONStr = JSON.stringify(data);
fs.writeFileSync('1-json.json', updatedJSONStr);
console.log(JSON.stringify(data));

