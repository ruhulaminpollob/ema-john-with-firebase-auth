import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const [error,setError]=useState('')

    const handleSignUp=event=>{
        setError('')
        event.preventDefault()
        const form=event.target;
        const email=form.email;
        const password=form.password;
        const confirm=form.confirm;

        if (password !==confirm) {
            setError('Password does not match')
        }

    }


    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Register</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="confirm password" name='confirm' required className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className=''>
                                <p>Already have an account?<Link to="/register" className='text-yellow-600'> Login</Link> </p>
                            </div>
                            <div className='mt-6'>
                                <hr className='border-b-2' />
                                <p className=' p-2 relative -top-6 bg-white w-fit mx-auto'>or</p>
                            </div>
                            <div className='text-center'>
                                <button className='border-2 w-full p-1 rounded font-bold'>Continue With Google</button>
                            </div>
                            <p className='text-red-400'>{error}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;