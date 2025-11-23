// api.js
export async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Ошибка сети');
    const users = await response.json();
    return users;
  } catch (err) {
    console.log("Ошибка API:", err.message);
    return [];
  }
}

