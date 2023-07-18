import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Home/Home/Sheard/NavBar";
import Footer from "../Pages/Home/Home/Sheard/Footer";

const ToysLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ToysLayOut;
