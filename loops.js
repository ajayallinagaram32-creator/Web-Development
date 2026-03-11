// JSON array of 3 YouTube videos
const videos = [
  { "title": "Intro to JavaScript", "id": "abc123" },
  { "title": "Advanced Node.js", "id": "def456" },
  { "title": "Async Programming", "id": "ghi789" }
];

// print video titles using a for loop
for (let i = 0; i < videos.length; i++) {
  console.log(videos[i].title);
}