import React from "react";
import Image from "../image/Images";
import "./collections.css";

const Collections = () => {
  return (
    <div className="collections">
      {/* Collection */}
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>Minimalist Bedrooms</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>Minimalist Bedrooms</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>Minimalist Bedrooms</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>
    </div>
  );
};

export default Collections;
