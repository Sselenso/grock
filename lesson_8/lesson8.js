
// Напиши 4 строчки кода:

// Получи только title и price каждого товара (деструктуризация + map)
// → результат: ["iPhone — 1200", "MacBook — 2500", "AirPods — 250"]
// Создай новый массив только товаров в наличии (filter + spread)
// Добавь к первому товару поле discount: 10% не меняя оригинал (spread)
// Из второго товара достань title и всё остальное в переменную details (деструктуризация + rest)

// Пример первой строчки:
// JavaScriptconst titlesWithPrice = products.map(({ title, price }) => `${title} — ${price}`);


const products = [
  { id: 1, title: "iPhone", price: 1200, inStock: true },
  { id: 2, title: "MacBook", price: 2500, inStock: false },
  { id: 3, title: "AirPods", price: 250, inStock: true }
];

const titlesWithPrice = products.map(({ title, price }) => `${title} — ${price}`);
console.log(titlesWithPrice);
const inStockProducts = [...products.filter(p => p.inStock)]
console.log("В наличии:", inStockProducts);
const productWithDiscount = { ...products[0], discount: "10%" };
console.log("Со скидкой:", productWithDiscount)
const { title, ...details } = products[1];
console.log("Название:", title);      
console.log("Остальное:", details);
