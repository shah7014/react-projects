import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AddPostForm from "./features/posts/pages/AddPostFormView";
import EditPostView from "./features/posts/pages/EditPostView";
import Posts from "./features/posts/pages/PostsListView";
import SinglePostDetail from "./features/posts/pages/SinglePostDetailView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Posts />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostDetail />} />
          <Route path="edit/:postId" element={<EditPostView />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
