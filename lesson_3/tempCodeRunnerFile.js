console.log("=== Демонстрация var ===");
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("var i =", i);
  }, 100);
}

console.log("=== Демонстрация let ===");
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("let i =", i);
  }, 100);
}

console.log("=== Демонстрация const ===")
const user = {
	name: "Дима",
	age: 40
} 

user.name = "Nick";

console.log(user);