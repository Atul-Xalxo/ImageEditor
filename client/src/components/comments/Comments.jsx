
import "./comments.css";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = ({ id }) => {
 

  const { isPendig, error, data } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => apiRequest.get(`/comments/${id}`).then((res) => res.data),
  });

  if (isPendig) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>No comments</div>;
  console.log(data);

  

  return (
    <div className="comment">
      <div className="commentList">
        <span className="commentCount">
          {data.length === 0 ? "No comments" : data.length}{" Comments "}  {/* data.length+" "+"Comments" */}
        </span>
        {/* COMMENT */}
        {data?.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
    <CommentForm />
    </div>
  );
};

export default Comments;
