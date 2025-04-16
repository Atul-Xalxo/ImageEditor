import React from "react";
import Image from "../image/Images";
import "./boards.css";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

const Boards = ({ userId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["boards", userId],
    queryFn: () => apiRequest.get(`/board/${userId}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occured: " + error;

  if (!data) return "User not found";

   console.log(data)

  return (
    <div className="collections">
      {/* Collection */}
      {data?.map((board) => (
        <Link to={`/search?boardId=${board._id}`} className="collection" key={board._id}>
          <Image src={board.firstPin.media} alt="" />
          {/* {console.log(board.firstPin.media)} */}
          <div className="collectionInfo">
            <h1>{board.title}</h1>
            <span>
              {board.pinCount}  Pins . {format(board.firstPin.createdAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Boards;
