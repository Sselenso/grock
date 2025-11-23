import { API_URL } from './config.js';

export default async function getUsers() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Ошибка сети');
    const users = await response.json();
    return users.map(user => user.name);
  } catch (err) {
    console.log("Ошибка в API:", err.message);
    return [];
  }
}