const products = [
	{ name: 'iPhone', price: 1200, inStock: true },
	{ name: 'MacBook', price: 2500, inStock: false },
	{ name: 'AirPods', price: 250, inStock: true },
	{ name: 'iPad', price: 800, inStock: true },
	{ name: 'Watch', price: 500, inStock: false },
];

const stock = products.filter(stock => stock.inStock);
console.log(stock);

// Из массива products получи массив только цен → а потом посчитай общую стоимость всех товаров в наличии
const sumInStock = stock.reduce((total, price) => total + price.price, 0);
console.log(sumInStock);