const person = {
  name: "Алексей",
  age: 30
};

const anotherPerson = person;
anotherPerson.age = 31;

console.log(person.age); // что выведет? 31 или 30?
