import React from "react";
import Image from "../../components/image/Images";
import PostInteractions from "../../components/postInteractions/PostInteractions";
import { Link, useParams } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import "./postPage.css";
import apiRequest from "../../utils/ApiRequest";
import { useQuery } from "@tanstack/react-query";

const PostPage = () => {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["pin", id],
    queryFn: async () => {
    try {
      const response = await apiRequest.get(`/pins/${id}`);
     // console.log(response); // Log the response data for debugging
      return response.data;
    } catch (err) {
      console.error(err); // Log any error that might occur
      throw err;
    }
  },

  });

  if (isPending) return "Loading...";
  if (error) return "An error has occured: " + error.message;

  if (!data) return "Pin not found";
  //console.log(data);

  return (
    <div className="postPage">
      <svg
        height="20"
        viewBox="0 0 24 24"
        width="20"
        style={{ cursor: "pointer" }}
      >
        <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
      </svg>
      <div className="postContainer">
        <div className="postImg">
          <Image src={data.media} alt="" w={736} />
        </div>
        <div className="postDetails">
          <PostInteractions />
         {console.log(data)}
          <Link to={`/${data.user.username}`} className="postUser">
            <Image path={data.user.img || "/general/noAvatar.png"}  />
            <span>{data.user.displayName}</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;

// 1:14:14

//3:13:00

