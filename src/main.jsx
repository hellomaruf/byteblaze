import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/home/Home";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Blog from "./components/blog/Blog";

const router = createBrowserRouter([
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
          // fetch(`https://dev.to/api/articles/${params.id}`),
        console.log(params.id),
        element: <Blog />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
