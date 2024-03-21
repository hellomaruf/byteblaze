import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  const { id, cover_image, title, published_at, description } = blog;
  return (
    <div className="">
      <Link
        rel="noopener noreferrer"
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline text-gray-800"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || "errorImg.png"}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
