import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Home/Sheard/Footer";
import NavBar from "../Pages/Home/Home/Sheard/NavBar";
const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;