import React from "react";
import "../styles/Video.css";
import VideoCard from "./VideoCard.jsx";
const Video = ({ videos}) => {
  return (
    <div className="vidoes">
      {videos.map((item, index) => (
        <VideoCard
          index={index}
          key={item.image}
          image={item.image}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default Video;
