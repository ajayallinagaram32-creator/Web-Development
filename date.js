// Function to get the current date
function getCurrentDate() {
    return new Date();
}

// Function to calculate discount amount
function calculateDiscountAmount(price, discountPercent) {
    return (price * discountPercent) / 100;
}

// Export the functions
export { getCurrentDate, calculateDiscountAmount };
