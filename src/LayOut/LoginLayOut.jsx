import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Home/Home/Sheard/NavBar";

const LoginLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayOut;