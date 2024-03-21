import { useLoaderData } from "react-router-dom";

function Blog() {
  const blog = useLoaderData();
  console.log(blog);

  return (
    <div>
      <h2>Single page {blog.title}</h2>
    </div>
  );
}

export default Blog;
