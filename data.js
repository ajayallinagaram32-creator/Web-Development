// Function to loop through an array and print each item
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Function to loop through an array using forEach and print each item
function printArrayForEach(arr) {
    arr.forEach(item => {
        console.log(item);
    });
}

// Function to loop through an array using for...of and print each item
function printArrayForOf(arr) {
    for (let item of arr) {
        console.log(item);
    }
}

// Export the functions
module.exports = {
    printArray,
    printArrayForEach,
    printArrayForOf
};
