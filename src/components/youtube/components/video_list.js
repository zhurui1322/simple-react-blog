import React from 'react';
import VideoListItem from './video_list_item';
import '../youtube.css';
const VideoList = (props) => {
  const VideoList = props.videos.map((video) => {
    return <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video}/>
  });

  return (
    <ul className="col-md-4 list-group">
      {VideoList}
    </ul>
  )
};

export default VideoList;