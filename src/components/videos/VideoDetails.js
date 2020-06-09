import React from 'react';

const VideoDetails = ({ video }) => {
    if (!video) {
        return (
            <div>Loading...</div>
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
             <iframe src={videoSrc}  title={video.snippet.title} style={{width:'100%', height:'300px'}}></iframe>
             <h2>{video.snippet.title}</h2>
             <p> {video.snippet.description}</p>
        </div>
    );
}

export default VideoDetails;