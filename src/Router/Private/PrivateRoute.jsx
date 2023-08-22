/* eslint-disable react/prop-types */
import {  useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

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
    else{
        Swal.fire('You have to login first')
        return <Navigate state={{from:location}} to='/login' replace></Navigate>;
    }
};

export default PrivateRoute;