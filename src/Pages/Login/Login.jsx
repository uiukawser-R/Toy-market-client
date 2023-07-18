import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../../assets/login.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import useTitle from "../../hooks/useTitle";

const Login = () => {

    const {signIn,googleProvider,loading}=useContext(AuthContext);
    useTitle("Login")
    const navigate=useNavigate();
    const location=useLocation();
    const auth =getAuth(app);
    const from=location.state?.from?.pathname || '/category/1'

    if(loading){
        
        return <h1 className='text-center font-bold text-7xl text-success'>L<span className="loading loading-spinner text-secondary"></span>ding.....</h1>
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password); 
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                
                navigate(from, {replace:true})
            })
            .catch(error => console.log(error))
            alert('Seccessful!')
    }



    const handleSignInWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const googleUser=result.user;
            console.log(googleUser);
            navigate(from, {replace: true})
    
        }).catch(error=>{
            console.log(error);
        })
      }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">

                    <img   src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text"
                                    name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='m-4 text-center'>Dont have an account? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link></p>
                        <button className="btn btn-primary"  onClick={handleSignInWithGoogle}><FaGoogle></FaGoogle>Signin with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;