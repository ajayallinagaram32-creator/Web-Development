
// Personal details: name, email, gender, age
var name = "John Doe";
var email = "john.doe@example.com";
var gender = "Male";
var age = 30;

console.log("Name characters:", name.length);
console.log("Email characters:", email.length);
console.log("Gender characters:", gender.length);
console.log("Age characters:", String(age).length);

// Developer string with extra spaces — normalize and count characters
var dev = "i   am  a   react   js   developer";
var devClean = dev.replace(/\s+/g, ' ').trim();
console.log("Original dev string:", dev);
console.log("Cleaned dev string:", devClean);
console.log("Cleaned dev characters:", devClean.length);

// City, state, country and concatenated address
var city = "New York";
var state = "New York";
var country = "USA";
var address = city + ", " + state + ", " + country;
console.log("Address:", address);


