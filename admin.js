// Define user role (this could come from authentication or database)
const userRole = 'admin'; // Change this to 'editor', 'user', etc. for testing

// Check if user can edit
if (userRole === 'admin' || userRole === 'editor') {
    console.log('YOU CAN EDIT THE MESSAGE');
} else {
    console.log('Not allowed');
}
