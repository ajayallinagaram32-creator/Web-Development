// Array to keep track of followed users
let followers = [];

// Function to follow a user
function follow(user) {
    if (!followers.includes(user)) {
        followers.push(user);
        console.log(`You are now following ${user}`);
    } else {
        console.log(`You are already following ${user}`);
    }
}

// Function to unfollow a user
function unfollow(user) {
    let index = followers.indexOf(user);
    if (index > -1) {
        followers.splice(index, 1);
        console.log(`You have unfollowed ${user}`);
    } else {
        console.log(`You are not following ${user}`);
    }
}

// Example usage (for testing)
follow('john_doe');
follow('jane_smith');
follow('john_doe'); // Already following
unfollow('john_doe');
unfollow('unknown_user'); // Not following
