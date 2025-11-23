
// main.js
import { getAllUsers } from './api.js';
import { formatUser } from './utils.js';

async function start() {
  console.log("Запускаю приложение...");

  const users = await getAllUsers();

  // Фильтруем тех, у кого email заканчивается на .biz
  const bizUsers = users.filter(user => user.email.endsWith('.biz'));

  console.log(`Найдено пользователей с .biz: ${bizUsers.length}`);

  // Выводим красиво
  bizUsers.forEach(user => {
    console.log("→", formatUser({
      name: user.name,
      email: user.email,
      city: user.address.city
    }));
  });

  if (bizUsers.length === 0) {
    console.log("Таких пользователей нет :(");
  }
}

start();