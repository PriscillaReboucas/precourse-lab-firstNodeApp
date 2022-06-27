const prompt = require('prompt-sync')();

function greet(namePassedIn, countDate) {
  return `
  Welcome to SALT, ${namePassedIn}
  Today it is ${countDate} left until the course starts`;
}

// Main program
const name = prompt('What is your name? ');
const init = prompt('When does the course start? ');
const future = new Date(init);
const current = new Date();

const diff = Math.abs(future.getTime() - current.getTime());
const days = Math.ceil(diff/(1000 * 60 * 60 * 24));

const greeting = greet(name, days);
console.log(greeting);

module.exports.greet = greet;