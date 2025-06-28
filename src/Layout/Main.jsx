import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="font-lexend overflow-hidden">
      <Navbar />
      <div className="lg:mt-32 mt-36 lg:w-10/12 mx-auto p-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
