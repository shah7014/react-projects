import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "../PostAuthor";
import PostReactions from "../PostReactions";
import {
  allPostsSelector,
  postsErrorSelector,
  postsStatusSelector,
} from "../postsSlice";

const Posts = () => {
  // const dispatch = useDispatch();

  const availablePosts = useSelector(allPostsSelector);
  const postStatus = useSelector(postsStatusSelector);
  const postsError = useSelector(postsErrorSelector);

  // no need as we are fetching posts when the app loads in index.js
  // useEffect(() => {
  //   if (postStatus === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [dispatch, postStatus]);

  let content = <p className="text-white text-xl">Loading...</p>;

  if (postStatus === "succeeded") {
    content = availablePosts.map((post) => (
      <div
        className="border border-white rounded-xl px-4 py-6 mb-3"
        key={post.id}
      >
        <h4 className="text-3xl font-bold text-white mb-2">{post.title}</h4>
        <p className="text-2xl text-white mb-2 italic">
          {post.content.substring(0, 75) + "..."}
        </p>
        <div className="flex flex-row gap-3 items-center ">
          <Link
            to={`/post/${post.id}`}
            className="text-xl text-blue-500 underline"
          >
            View Post
          </Link>
          <PostAuthor userId={post.userId} />
        </div>
        <PostReactions post={post} />
      </div>
    ));
  } else if (postStatus === "failed") {
    content = <p className="text-red-700 text-xl">{postsError}</p>;
  }
  return (
    <div className="mt-6">
      <h3 className="font-bold text-4xl text-white mb-4">Posts</h3>
      {content}
    </div>
  );
};

export default Posts;
