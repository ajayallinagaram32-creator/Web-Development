// JSON array of YouTube videos
const videos = [
    {
        title: "JavaScript Tutorial for Beginners",
        url: "https://www.youtube.com/watch?v=example1"
    },
    {
        title: "Advanced JavaScript Concepts",
        url: "https://www.youtube.com/watch?v=example2"
    },
    {
        title: "Building Web Apps with JS",
        url: "https://www.youtube.com/watch?v=example3"
    },
    {
        title: "Node.js Crash Course",
        url: "https://www.youtube.com/watch?v=example4"
    },
    {
        title: "React.js Fundamentals",
        url: "https://www.youtube.com/watch?v=example5"
    }
];

// Extract titles into a new array
const titles = videos.map(video => video.title);

// Output the arrays
console.log("Videos Array:");
console.log(videos);
console.log("\nTitles Array:");
console.log(titles);
