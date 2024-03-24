import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/blog/Blog";
import Blogs from "../components/blogs/Blogs";
import Bookmarks from "../components/bookmarks/Bookmarks";
import Home from "../components/home/Home";
import MainLayout from "../components/layout/MainLayout";
import Content from "../components/Content/Content";
import Author from "../components/Author/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        element: <Blog />,
        children: [
          {
            index: true,
            element: <Content />,
          },
          {
            path: "author",
            element: <Author />,
          },
        ],
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);
