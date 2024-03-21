import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import Footer from "../Footer/Footer";

function MainLayout() {
  return (
    <div>
      <Nav />
      <div className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
