"use strict"

const myName = "Дима";          
const myAge = 40;                   
const isStudent = true;             
const nothing = null;               
let notDefined;                     
const bigNumber = 9007199254740992n;

console.log(myName);
console.log(typeof myName);
console.log(myAge);
console.log(typeof myAge);
console.log(isStudent);
console.log(typeof isStudent);
console.log(nothing);
console.log(typeof nothing);
console.log(notDefined);
console.log(typeof notDefined);
console.log(bigNumber);
console.log(typeof bigNumber);

const person = {
  name: "Алексей",
  age: 30
};

const anotherPerson = person;
anotherPerson.age = 31;

console.log(person.age); // Ответ: выведет 31, потому что это объект переменная ссылочного типа