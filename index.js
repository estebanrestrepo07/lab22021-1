const interface = require("readline-sync");
const calculator = require("./app/calculator");


const firstNum = interface.question("Deme el primer numero: ");
const secondNum = interface.question("Deme el segundo numero: ");

const a = parseInt(firstNum)
const b = parseInt(secondNum)

console.log(`add: ${a} + ${b} = ${calculator.add(a, b)}`);
console.log(`minus: ${a} - ${b} = ${calculator.minus(a, b)}`);
console.log(`multiply: ${a} * ${b} = ${calculator.multiply(a, b)}`);
console.log(`divide: ${a} / ${b} = ${calculator.divide(a, b)}`);