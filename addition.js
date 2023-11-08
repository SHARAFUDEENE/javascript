var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter your first no '));
let b=parseInt(readlineSync.question('enter your name'));
let c=a+b
console.log("Hello world!",c);