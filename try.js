// Data structures
let users = [];
let cart = [];
let wishlist = [];

// Login function
function login(username, password) {
    try {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            console.log("Login successful for user:", username);
            return true;
        } else {
            throw new Error("Invalid username or password");
        }
    } catch (error) {
        console.error("Login failed:", error.message);
        return false;
    }
}

// Signup function
function signup(username, email, password) {
    try {
        const existingUser = users.find(u => u.username === username || u.email === email);
        if (existingUser) {
            throw new Error("User already exists");
        }
        users.push({ username, email, password });
        console.log("Signup successful for user:", username);
        return true;
    } catch (error) {
        console.error("Signup failed:", error.message);
        return false;
    }
}

// Add product to cart function
function addProductToCart(productId, productName, price, quantity = 1) {
    try {
        if (!productId || !productName || !price || quantity <= 0) {
            throw new Error("Invalid product details");
        }
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
        return true;
    } catch (error) {
        console.error("Failed to add product to cart:", error.message);
        return false;
    }
}

// Delete from wishlist function
function deleteFromWishlist(productId) {
    try {
        const index = wishlist.findIndex(item => item.productId === productId);
        if (index === -1) {
            throw new Error("Product not found in wishlist");
        }
        const removedItem = wishlist.splice(index, 1);
        console.log(`Removed ${removedItem[0].productName} from wishlist.`);
        return true;
    } catch (error) {
        console.error("Failed to delete from wishlist:", error.message);
        return false;
    }
}