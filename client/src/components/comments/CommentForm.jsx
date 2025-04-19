import React, { use, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import apiRequest from "../../utils/apiRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const CommentForm = ({ id }) => {
  const [emoji, setEmoji] = useState(false);
  const [desc, setDesc] = useState("");

  //console.log(desc);

  const handleEmoji = () => {
    setEmoji((prev) => !prev);
  };

  const handleEmojiClick = (e) => {
    setDesc((prev) => prev + " " + e.emoji);
    //setEmoji(false);
  };

  //useMutation

  const addComment = async (comment) => {
    const res = await apiRequest.post("/comments", comment);
    return res.data;
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", id] });
      setDesc("");
      setEmoji(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      mutation.mutate({ description: desc, pin: id });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form action="" className="commentForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a comment"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />

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
};

export default CommentForm;
