// Simulate Amazon cart and wishlist functionality

// Data structures
let cart = [];
let wishlist = [];

// Function to add item to cart
function addToCart(productId, productName, price, quantity = 1) {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
        console.log(`Updated quantity of ${productName} in cart. New quantity: ${existingItem.quantity}`);
    } else {
        cart.push({
            productId: productId,
            productName: productName,
            price: price,
            quantity: quantity
        });
        console.log(`Added ${productName} to cart.`);
    }
}

// Function to add item to wishlist
function addToWishlist(productId, productName, price) {
    // Check if item already exists in wishlist
    const existingItem = wishlist.find(item => item.productId === productId);

    if (existingItem) {
        console.log(`${productName} is already in your wishlist.`);
    } else {
        wishlist.push({
            productId: productId,
            productName: productName,
            price: price
        });
        console.log(`Added ${productName} to wishlist.`);
    }
}

// Example usage
// addToCart('B08N5WRWNW', 'Echo Dot (4th Gen)', 39.99, 2);
// addToWishlist('B08N5WRWNW', 'Echo Dot (4th Gen)', 39.99);

// Helper functions to view cart and wishlist
function viewCart() {
    console.log('Your Cart:');
    cart.forEach(item => {
        console.log(`${item.productName} - $${item.price} x ${item.quantity}`);
    });
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`Total: $${total.toFixed(2)}`);
}

function viewWishlist() {
    console.log('Your Wishlist:');
    wishlist.forEach(item => {
        console.log(`${item.productName} - $${item.price}`);
    });
}
