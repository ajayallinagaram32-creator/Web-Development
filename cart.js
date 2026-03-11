// Define the cart as an array of items with prices
const cart = [
    { name: "Laptop", price: 1200 },
    { name: "Book", price: 20 },
    { name: "Headphones", price: 100 }
];

// Calculate the total cart value
const cartValue = cart.reduce((total, item) => total + item.price, 0);

// Check if cart value is greater than or equal to 500
if (cartValue >= 500) {
    console.log("Coupon code: ABCD");
} else {
    console.log("No coupon available.");
}