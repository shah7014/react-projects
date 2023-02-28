import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAPost } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(addAPost({ id: nanoid(), title, content }));
    dispatch(addAPost(title, content));
  };

  return (
    <div>
      <h3 className="text-3xl text-white font-bold mb-3">Add a new Post</h3>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-xl text-white">
            Post Title:
          </label>
          <input
            required={true}
            className="p-2"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content" className="text-xl text-white">
            Content:
          </label>
          <input
            required={true}
            id="content"
            className="p-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="justify-items-stretch bg-white py-1 rounded-lg"
        >
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
