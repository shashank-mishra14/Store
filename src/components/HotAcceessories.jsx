import React from "react";
import "../styles/HotAcceessories.css";
import HotItemcard from "./HotItemcard.jsx";
const HotAcceessories = (music, musicCover) => {
  return (
    <div className="HotAcceessories">
      <div>
        <img src={musicCover} alt="Cover" />
      </div>

      <div>
        {music.map((item,index) => (
            <HotItemcard key={item.img} name={item.name} price={item.price} image={item.image} index={index}/>
        ))};;
      </div>
    </div>
  );
};

export default HotAcceessories;
