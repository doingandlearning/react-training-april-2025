// 2015 ...
// ES2015 - ES6 ->
// ES2016 - ES7
// ES2017 - ES8

// var  -> const/let

// Interpolated strings

const name = "Kevin";

const greeting = "Hello, " + name + ", how are you today?";
const greeting2 = `Hello, ${name.toUpperCase()}, how are you?`;

// arrow functions

addFunction(1, 2);

function addFunction(a, b) {
  return a + b;
}

// add(1,2)

const add = (a, b) => a + b;
const complexAdd = (a, b) => {
  // do some more work
  return a + b;
};

// destructuring

const ipg = ["Tony", "Stephen", "Gaetan"];
const [first, ...everyoneElse] = ipg;

const person = { firstName: "Max", languages: ["C#", "PHP", "Perl", "Python"] };
const { firstName: realName } = person;
