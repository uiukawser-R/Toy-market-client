


import { Link } from "react-router-dom";
import logo from '../../../../assets/Logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItems = (
        <>
            <li className="font-bold">
                <Link to="/category/1">Home</Link>
            </li>
            <li className="font-bold"> <Link to='/blog'>Blog </Link></li>
            {user?.email ?
                <>

                    <li className="font-bold"> <Link to="/allToy">All Toy</Link></li>
                    <li className="font-bold"> <Link to="/mytoy">My Toy</Link></li>
                    <li className="font-bold"> <Link to="/addtoy">Add a Toy</Link></li>


                </>
                :
                <>
                                    <li className="font-bold"> <Link to="/allToy">All Toy</Link></li>
                    <li className="font-bold"> <Link to="/mytoy">My Toy</Link></li>
                    <li className="font-bold"> <Link to="/addtoy">Add a Toy</Link></li>
                </>}
        </>
    );


    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }



    return (
        <div className="navbar bg-slate-200 sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img className="h-8" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="navbar-end">

                {user ?
                    <>
                        {/* <img style={{ height: '50px', width: '50px' }} className='rounded-full p-1' src={user?.photoURL} alt="" /> */}
                        <Tippy content={user.displayName}>

                            <img style={{ height: '50px', width: '50px' }} className=' rounded-full p-1' src={user?.photoURL} alt="" />

                        </Tippy>
                        <button className="btn btn-info btn-sm" onClick={handleLogOut}>LogOut</button>
                    </>
                    :
                    <Link to="/login">
                        <button className="btn btn-info btn-sm">Login</button>
                    </Link>}
            </div>
        </div>
    );
};

export default NavBar;
