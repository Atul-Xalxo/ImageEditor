import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import apiRequest from "../../utils/apiRequest";

const followUser = async (username) => {
  const response = await apiRequest.post(`/users/follow/${username}`);
  return response.data;
};
const FollowButton = ({ isFollowing, username }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: followUser,

    onSuccess: () => {
      queryClient.invalidateQueries(["profile", username]);
    },
  });

  return (
    <button
      onClick={() => mutation.mutate(username)}
      disabled={mutation.isPending}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
