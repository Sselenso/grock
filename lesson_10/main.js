import getUsers from './api.js';
import { API_URL, logProject } from './config.js';

logProject();

async function start() {
  const names = await getUsers();
  console.log("Список пользователей:");
  names.forEach(name => console.log("👤", name));
}

start();
