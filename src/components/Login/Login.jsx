import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" required className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p>New to Ema-john? <Link to="/register" className='text-yellow-600'>Create New Account</Link> </p>
                            </div>
                            <div className='mt-6'>
                                <hr  className='border-b-2'/>
                                <p className=' p-2 relative -top-6 bg-white w-fit mx-auto'>or</p>
                            </div>
                            <div className='text-center'>
                                <button className='border-2 w-full p-1 rounded font-bold'>Continue With Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;