const products = [
  { id: 1, title: "iPhone", price: 1200, inStock: true },
  { id: 2, title: "MacBook", price: 2500, inStock: false },
  { id: 3, title: "AirPods", price: 250, inStock: true }
];
const renamed = products.map(({ title: name, price: cost }) => ({ name, cost }));
console.log(renamed)
const stock = products.filter(stock => stock.inStock)
console.log(stock);