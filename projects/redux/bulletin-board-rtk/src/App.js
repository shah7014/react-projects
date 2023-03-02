import AddPostForm from "./features/posts/AddPostForm";
import Posts from "./features/posts/Posts";

function App() {
  return (
    // <div className="h-screen bg-gray-800">
    <div className="max-w-[800px] mx-auto mt-4 px-2">
      <AddPostForm />
      <Posts />
    </div>
    // </div>
  );
}

export default App;
