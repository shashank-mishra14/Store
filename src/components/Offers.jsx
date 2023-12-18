import React from "react";
import Offer from "./Offer.jsx";
import "../styles/Offers.css";
const Offers = ({offer}) => {
  return (
    <div>
      <div className="offersSection">
        {offer.map((item, index) => (
          <Offer 
            key={item.img}
            index={index}
            src={item.image}
            link={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;
