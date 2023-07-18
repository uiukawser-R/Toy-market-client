import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Footer from "../Pages/Home/Home/Sheard/Footer";
import NavBar from "../Pages/Home/Home/Sheard/NavBar";
import RightNav from "../Pages/Home/RightNav";
import Banner from "../Pages/Home/Banner/Banner";
const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="mt-5">
                <Banner></Banner>
            </div>

            <div className="mt-10">
                <div className="container mx-auto">
                    <div className="flex">
                        <div className="w-9/12">
                            <Outlet></Outlet>
                        </div>
                        <div className="w-3/12">
                            <RightNav></RightNav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5"> 
            <Home></Home>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;