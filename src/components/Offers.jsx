import React from "react";
import Offer from "./components/Offer.jsx";
const Offers = () => {
  return (
    <div>
      <div className="offersSection">
        {Offers.map((item, index) => (
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
