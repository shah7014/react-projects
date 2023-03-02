import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import PostReactions from "./PostReactions";
import { allPostsSelector } from "./postsSlice";

const Posts = () => {
  const availablePosts = useSelector(allPostsSelector);

  return (
    <div className="mt-6">
      <h3 className="font-bold text-4xl text-white mb-4">Posts</h3>
      {availablePosts.map((post) => (
        <div
          className="border border-white rounded-xl px-4 py-6 mb-3"
          key={post.id}
        >
          <h4 className="text-3xl font-bold text-white mb-2">{post.title}</h4>
          <p className="text-2xl text-white mb-2">{post.content}</p>
          <PostAuthor userId={post.userId} />
          <PostReactions post={post} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
