import React, { useState } from 'react'
import EmojiPicker from "emoji-picker-react";
import { apiRequest } from '../../config/apiRequest';
const CommentForm = ({id}) => {

     const [emoji, setEmoji] = useState(false);
     const [desc,setDesc] = useState("");

     console.log(desc);
     

    const handleEmoji = () => {
      setEmoji((prev) => !prev);
    };

    const handleEmojiClick = (e)=>{
      setDesc((prev)=>prev+" "+e.emoji)
      //setEmoji(false);
    }

    const handleSubmit= async(e)=>{
      e.prevent.default();

      const res = await apiRequest.post("/comments",{
        description: desc,
        pin:id,
      });

    }
    
  return (
    <div>
      <form action="" className="commentForm" onSubmit={handleSubmit}>
        { <input type="text" placeholder="Add a comment" onChange={(e)=>setDesc(e.target.value) } value={desc}  />}
        <div className="emoji">
          <div onClick={handleEmoji}>😒</div>

          {emoji && (
            <div className="emojiPicker">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default CommentForm