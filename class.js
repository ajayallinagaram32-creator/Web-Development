// YouTube Video Sections Classes and Functions

// Video class representing the main video details
class Video {
    constructor(id, title, description, channel, views, likes, dislikes, uploadDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.channel = channel;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.uploadDate = uploadDate;
        this.comments = [];
        this.relatedVideos = [];
    }

    // Method to add a comment
    addComment(comment) {
        this.comments.push(comment);
    }

    // Method to get total comments count
    getCommentsCount() {
        return this.comments.length;
    }

    // Method to add related video
    addRelatedVideo(video) {
        this.relatedVideos.push(video);
    }

    // Method to get video info
    getVideoInfo() {
        return {
            id: this.id,
            title: this.title,
            channel: this.channel.name,
            views: this.views,
            likes: this.likes,
            uploadDate: this.uploadDate
        };
    }
}

// Comment class for individual comments
class Comment {
    constructor(id, author, text, likes, replies, timestamp) {
        this.id = id;
        this.author = author;
        this.text = text;
        this.likes = likes;
        this.replies = replies || [];
        this.timestamp = timestamp;
    }

    // Method to add a reply
    addReply(reply) {
        this.replies.push(reply);
    }

    // Method to get comment info
    getCommentInfo() {
        return {
            author: this.author,
            text: this.text,
            likes: this.likes,
            repliesCount: this.replies.length,
            timestamp: this.timestamp
        };
    }
}

// Channel class for channel information
class Channel {
    constructor(id, name, subscribers, videosCount, description) {
        this.id = id;
        this.name = name;
        this.subscribers = subscribers;
        this.videosCount = videosCount;
        this.description = description;
    }

    // Method to subscribe (just a placeholder)
    subscribe() {
        this.subscribers++;
        console.log(`Subscribed to ${this.name}`);
    }

    // Method to get channel info
    getChannelInfo() {
        return {
            name: this.name,
            subscribers: this.subscribers,
            videosCount: this.videosCount
        };
    }
}

// RelatedVideo class for related videos section
class RelatedVideo {
    constructor(id, title, channel, views, duration, thumbnail) {
        this.id = id;
        this.title = title;
        this.channel = channel;
        this.views = views;
        this.duration = duration;
        this.thumbnail = thumbnail;
    }

    // Method to get related video info
    getRelatedVideoInfo() {
        return {
            title: this.title,
            channel: this.channel.name,
            views: this.views,
            duration: this.duration
        };
    }
}

// Playlist class for playlist section
class Playlist {
    constructor(id, title, videos, creator) {
        this.id = id;
        this.title = title;
        this.videos = videos || [];
        this.creator = creator;
    }

    // Method to add video to playlist
    addVideo(video) {
        this.videos.push(video);
    }

    // Method to remove video from playlist
    removeVideo(videoId) {
        this.videos = this.videos.filter(video => video.id !== videoId);
    }

    // Method to get playlist info
    getPlaylistInfo() {
        return {
            title: this.title,
            videosCount: this.videos.length,
            creator: this.creator.name
        };
    }
}

// Utility functions

// Function to create a sample video with sections
function createSampleVideo() {
    const channel = new Channel('ch1', 'Tech Channel', 1000000, 500, 'A channel about technology');

    const video = new Video(
        'v1',
        'JavaScript Tutorial',
        'Learn JavaScript from scratch',
        channel,
        500000,
        25000,
        500,
        new Date('2023-01-01')
    );

    // Add some comments
    const comment1 = new Comment('c1', 'User1', 'Great video!', 100, [], new Date('2023-01-02'));
    const comment2 = new Comment('c2', 'User2', 'Very helpful', 50, [], new Date('2023-01-03'));
    video.addComment(comment1);
    video.addComment(comment2);

    // Add related videos
    const related1 = new RelatedVideo('rv1', 'Advanced JS', channel, 200000, '10:30', 'thumb1.jpg');
    const related2 = new RelatedVideo('rv2', 'React Tutorial', channel, 300000, '15:45', 'thumb2.jpg');
    video.addRelatedVideo(related1);
    video.addRelatedVideo(related2);

    return video;
}

// Function to display video sections
function displayVideoSections(video) {
    console.log('=== VIDEO INFO ===');
    console.log(video.getVideoInfo());

    console.log('\n=== CHANNEL INFO ===');
    console.log(video.channel.getChannelInfo());

    console.log('\n=== COMMENTS ===');
    video.comments.forEach(comment => {
        console.log(comment.getCommentInfo());
    });

    console.log('\n=== RELATED VIDEOS ===');
    video.relatedVideos.forEach(rv => {
        console.log(rv.getRelatedVideoInfo());
    });
}

// Export classes and functions for use in other files
module.exports = {
    Video,
    Comment,
    Channel,
    RelatedVideo,
    Playlist,
    createSampleVideo,
    displayVideoSections
};
