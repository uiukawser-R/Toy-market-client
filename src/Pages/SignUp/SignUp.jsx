import { Link } from 'react-router-dom';
import img from '../../assets/login.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';
const SignUp = () => {
    useTitle("SignUp")

    const {createUser,loading}=useContext(AuthContext);

    if(loading){
        
        return <h1 className='text-center font-bold text-7xl text-success'>L<span className="loading loading-spinner text-secondary"></span>ding.....</h1>
    }


    const handleSignUp=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photo,email,password);

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>console.log(error))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">

                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Signup</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text"
                                name="photo" placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
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

                                <input className="btn btn-primary" type="submit" value="SignUp" />
                            </div>
                        </form>
                      
                        <p className='m-4 text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
                        
                        
                        <button className="btn btn-primary"><FaGoogle></FaGoogle>Signin with google</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;