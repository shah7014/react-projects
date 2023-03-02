import React from "react";
import { useSelector } from "react-redux";
import { allUsersSelector } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(allUsersSelector);

  const author = users.find((u) => u.id === Number(userId));

  return (
    <p className="text-sm text-gray-300">
      By {author ? author.name : "Anonymous"}
    </p>
  );
};

export default PostAuthor;
