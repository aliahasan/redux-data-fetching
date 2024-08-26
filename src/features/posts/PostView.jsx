import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { loading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error || error.message}</p>;
  }

  if (!posts || posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-[#01010C] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out text-white"
          >
            <h2 className="text-2xl font-semibold mb-4 ">
              {post.title}
            </h2>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PostView;
