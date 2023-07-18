import {  useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);

    const location=useLocation();
    console.log(location);

    if(loading){
        
        return <h1 className='text-center font-bold text-7xl text-success'>L<span className="loading loading-spinner text-secondary"></span>ding.....</h1>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>;
};

export default PrivateRoute;