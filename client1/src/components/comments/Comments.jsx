import React, { useState } from "react";
import Image from "../image/Images";
import "./comments.css";

import EmojiPicker from "emoji-picker-react";

const Comments = () => {

  const [emoji,setEmoji] = useState(false)

  const handleEmoji = () =>{
    setEmoji((prev)=> !prev)
  }

  return (
    <div className="comment">
      <div className="commentList">
        <span className="commentCount">5 comments</span>
        {/* COMMENT */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUser">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              natus dolore, iste totam ut delectus? Accusamus, minima! Maiores
              fuga ex quo ut nemo error, quaerat iste iure labore! Nemo,
              voluptatem!
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
      </div>
      <form action="" className="commentForm">
        <input type="text" placeholder="Add a comment" />
        <div className="emoji">
          <div onClick={handleEmoji}>😒</div>

          {emoji && (
            <div className="emojiPicker">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;
