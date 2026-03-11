// JSON array of ecommerce products
const products = [
  { id: 1, name: "Laptop", price: 12000, rating: 4.5 },
  { id: 2, name: "Smartphone", price: 18000, rating: 4.7 },
  { id: 3, name: "Headphones", price: 5000, rating: 4.2 },
  { id: 4, name: "Monitor", price: 22000, rating: 4.6 },
  { id: 5, name: "Keyboard", price: 3000, rating: 4.1 }
];

// 1. Filter products with price greater than 15000
const expensiveProducts = products.filter(p => p.price > 15000);
console.log("Products with price > 15000:", expensiveProducts);

// 2. Sort products by rating
const byRatingAsc = [...products].sort((a, b) => a.rating - b.rating);
const byRatingDesc = [...products].sort((a, b) => b.rating - a.rating);

console.log("Products sorted by rating (ascending):", byRatingAsc);
console.log("Products sorted by rating (descending):", byRatingDesc);
