//<script src="https://cdn.jsdelivr.net/npm/axios@1.13.2/dist/axios.min.js"></script>

// Example async functions using Axios to fetch data

// fetches JSON from a fake API
async function getData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// convenience functions
async function getUsers() {
    return getData('https://jsonplaceholder.typicode.com/users');
}

async function getPosts() {
    return getData('https://jsonplaceholder.typicode.com/posts');
}

// usage examples
(async () => {
    try {
        const users = await getUsers();
        console.log('Users:', users);

        const posts = await getPosts();
        console.log('Posts:', posts);
    } catch (e) {
        console.log('Fetch failed:', e);
    }
})();