import React from "react";
import Image from "../image/Images";
import "./boards.css";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/ApiRequest";
import { format } from "timeago.js";

const Boards = ({ userId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["boards", userId],
    queryFn: () => apiRequest.get(`/board/${userId}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occured: " + error;

  if (!data) return "User not found";

  console.log(data);

  return (
    <div className="collections">
      {/* Collection */}
      {data?.map((board) => (
        <div className="collection" key={board._id}>
          <Image path={board.firstPin.media} alt="" />
          <div className="collectionInfo">
            <h1>{board.title}</h1>
            <span>
              {board.pinCount} Pins . {format(board.createdAt)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Boards;
