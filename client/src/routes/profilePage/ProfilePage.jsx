import React, {  useState } from "react";
import Image from "../../components/image/Images";
import "./profilePage.css";
import Gallery from "../../components/gallery/Gallery";
import Boards from "../../components/boards/Boards";
import { Link, useParams } from "react-router-dom";
import apiRequest from "../../utils/apiRequest";
import { useQuery } from "@tanstack/react-query";
import FollowButton from "./FollowButton";


const ProfilePage = () => {
  const [type, setType] = useState("saved");

  const onHandleType = (prop) => {
    setType(prop);
  };

  const { username } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["profile", username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if(isPending) return "Loading...";
  if(error) return "An error has occured: "+ error;

  if(!data) return "User not found";

  //console.log(data.img);

  return (
    <div className="profilePage">
      <Image
        className="profileImage"
        path={data.img || "/general/noAvatar.jpg"}
        w={100}
        h={100}
        alt=""
      />
      <Link to="/:username">
        <h1 className="profileName">{data.displayName}</h1>
      </Link>
      <span className="profileUserName">{data.username}</span>
      <div className="followCounts">{data.followerCount} followers . {data.followingCount} followings</div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
         <FollowButton isFollowing={data.isFollowing} username={data.username} />
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
      {type === "created" ? <Gallery userId={data._id} /> : <Boards userId={data._id} />}
    </div>
  );
};

export default ProfilePage;
