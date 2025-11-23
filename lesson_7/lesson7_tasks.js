// Задача 1
const scores = [85, 92, 78, 96, 65, 88, 91];
const bests = scores.filter(score => score >= 80);
console.log(bests);

// Задача 2 + 3
const products = [
  { name: 'iPhone', price: 1200, inStock: true },
  { name: 'MacBook', price: 2500, inStock: false },
  { name: 'AirPods', price: 250, inStock: true },
  { name: 'iPad', price: 800, inStock: true },
  { name: 'Watch', price: 500, inStock: false },
];

const inStock = products.filter(p => p.inStock);
const totalPrice = inStock.reduce((sum, p) => sum + p.price, 0);
console.log("В наличии:", inStock);
console.log("Общая стоимость:", totalPrice);

// Задача 4
const words = ["яблоко", "банан", "яблоко", "груша", "банан", "яблоко"];
const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log(wordCount);

// Задача 5
const orders = [
  { userId: 1, amount: 150 },
  { userId: 2, amount: 320 },
  { userId: 1, amount: 80 },
  { userId: 3, amount: 450 },
  { userId: 2, amount: 120 }
];

const totalByUser = orders.reduce((acc, order) => {
  acc[order.userId] = (acc[order.userId] || 0) + order.amount;
  return acc;
}, {});
console.log(totalByUser);