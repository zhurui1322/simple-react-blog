import React from 'react';
import '../youtube.css';
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading</div>
  }
  const videoId = video.id.videoId;
  console.log(video);
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.channelTitle}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;