import React from 'react'
import Image from '../image/Images'
import {format} from 'timeago.js'

const Comment = ({comment}) => {
  
  console.log(comment)
  return (
   <div className="comment">
    <Image src = {comment.user.img || "/general/noAvatar.png"}/>
    <div className="commentContent">
      <span className="commentUsername">{comment.user.username}</span>
      <p className="commontText">
        {comment.description}
      </p>
      <span className="commentTime">{format(comment.createdAt)}</span>
    </div>

   </div>
  )
}

export default Comment