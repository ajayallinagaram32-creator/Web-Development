// JSON arrays for various collections

// Ecommerce products
const products = [
    { "id": 1, "name": "Laptop", "price": 999.99, "category": "Electronics" },
    { "id": 2, "name": "Sneakers", "price": 79.99, "category": "Footwear" },
    { "id": 3, "name": "Coffee Maker", "price": 49.99, "category": "Home Appliances" }
];

// Facebook friends
const facebookFriends = [
    { "name": "Emily", "id": "fb_123" },
    { "name": "Michael", "id": "fb_456" },
    { "name": "Sara", "id": "fb_789" }
];

// YouTube videos
const youtubeVideos = [
    { "title": "JavaScript Basics", "duration": "10:05", "views": 15000 },
    { "title": "React Hooks Tutorial", "duration": "12:30", "views": 22000 },
    { "title": "CSS Grid Layout", "duration": "08:20", "views": 9000 }
];

// Optional: print to verify
console.log(JSON.stringify(products, null, 2));
console.log(JSON.stringify(facebookFriends, null, 2));
console.log(JSON.stringify(youtubeVideos, null, 2));
