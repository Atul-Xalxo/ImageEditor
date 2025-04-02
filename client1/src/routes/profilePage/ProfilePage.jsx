import React, { useState } from "react";
import Image from "../../components/image/Images";
import "./profilePage.css";
import Gallery from '../../components/gallery/Gallery'
import Collections from '../../components/collections/Collections'
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [type, setType] = useState("saved");

  const onHandleType = (prop) => {
    setType(prop);
  };

  return (
    <div className="profilePage">
      <Image
        className="profileImage"
        path="/general/noAvatar.png"
        w={100}
        h={100}
        alt=""
      />
      <Link to="/:username">
      <h1 className="profileName">John Doe</h1>
      </Link>
      <span className="profileUserName">@johndoe</span>
      <div className="followCounts">10 followers - 20 followings</div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => onHandleType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => onHandleType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery />: <Collections />
      }
    </div>
  );
};

export default ProfilePage;
