const products = [
  { name: "Laptop", price: 999.99 },
  { name: "Smartphone", price: 499.99 },
  { name: "Tablet", price: 299.99 },
  { name: "Smartwatch", price: 199.99 },
];

const printProducts = (products) => {
  products.forEach((product) => {
    console.log(`Product: ${product.name}, Price: $${product.price}`);
  });
};

console.log(printProducts(products));
