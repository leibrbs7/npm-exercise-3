const { parse, toString, toArray} = require('@estilles/expression-parser');
const process = require('process');
let args = process.argv.slice(2);
let finalString = args.join(' ');
console.log(toString(parse(finalString)));
console.log(toArray(parse(finalString)));