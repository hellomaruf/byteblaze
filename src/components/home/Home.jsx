import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="hero relative">
        <div className="hero-content text-center h-[calc(100vh-120px)]">
          <div className="max-w-xl -mt-16">
            <h1 className="text-5xl font-bold">
              Welcome to{" "}
              <span className=" font-bold bg-gradient-to-r bg-300% from-[#FF204E]  to-[#0C359E] text-transparent bg-clip-text animate-gradient">
                ByteBlaze
              </span>
            </h1>
            <p className="py-6">
              ByteBlaze is the bridge between the complex world of technology
              and the curious minds eager to understand it
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/blogs"
                className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Read Blogs</span>
              </Link>
              <Link
                to="/bookmarks"
                className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Bookmarks</span>
              </Link>
            </div>
          </div>
        </div>

        <img className="w-full absolute bottom-0" src="wave.svg" alt="" />
      </div>
    </div>
  );
}

export default Home;
