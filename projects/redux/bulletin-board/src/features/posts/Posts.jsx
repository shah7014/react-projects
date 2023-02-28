import React from "react";
import { useSelector } from "react-redux";
import { allPostsSelector } from "./postsSlice";

const Posts = () => {
  const availablePosts = useSelector(allPostsSelector);

  return (
    <div className="mt-4">
      <h3 className="font-bold text-3xl text-white mb-4">Posts</h3>
      {availablePosts.map((post) => (
        <div className="border border-white rounded-xl p-4 mb-3" key={post.id}>
          <h4 className="text-xl font-bold text-white">{post.title}</h4>
          <p className="text-lg text-white">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
