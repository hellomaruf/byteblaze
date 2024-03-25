import { useLoaderData } from "react-router-dom";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
function Content() {
  const blog = useLoaderData();
  return (
    <div>
      <div
        rel="noopener noreferrer"
        className=" mx-auto group hover:no-underline focus:no-underline text-gray-800"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={blog.cover_image || "errorImg.png"}
        />
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
          {blog.tags.map((items, index) => (
            <a
              key={index}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline bg-[#FF204E] text-white"
            >
              {items}
            </a>
          ))}
        </div>
        <h1 className="text-2xl font-bold md:tracking-tight md:text-2xl">
          {blog.title}
        </h1>
        <div className=""><Markdown rehypePlugins={[rehypeRaw]}>{blog.body_html}</Markdown></div>
      </div>
    </div>
  );
}

export default Content;
