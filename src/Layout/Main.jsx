import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="font-lexend">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
