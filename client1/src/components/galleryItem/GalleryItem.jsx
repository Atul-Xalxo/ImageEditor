import React from "react";
import "./galleryItem.css";
import { Link } from "react-router-dom";
import Image from '../image/Images'

import Images from "../image/Images";

const GalleryItem = (props) => {
  const { item } = props;

  const optimizedHeight = (372 * item.height) / item.width;

  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* <img src={item.media} alt="" /> */}
      <Images
        path={item.media}
        alt=""
        w={370}
        h={optimizedHeight}
      />
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <Image path="/general/share.svg" alt="" />
        </button>
        <button>
          <Image path="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
