import Footer from "../component/footer";
import Navbar from "../component/navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url('/Homepage.jpg')" }}
    >
      <Navbar />
      <div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
