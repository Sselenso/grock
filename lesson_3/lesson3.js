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

// Почему var вывел три раза 3?  var глобальная переменная и мы ее переписываем в ходе цикла
// Почему let вывел 0, 1, 2?  let локальная начинается с 1 и ++ добавляет по 1
// Что ты понял про const из последнего примера? хотя сам объект и const но он ссылочного типа поэтому мы переписали значение 