import React from 'react';
import google from '../assets/google-signin-button.png'
import github from '../assets/github-sign-in.png'
import { Link } from 'react-router-dom';

const Login = () => {


const handleLogin=()=>{
    console.log(login);
}




    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
          <p>New User ? Please <Link to='/register' className="label-text-alt link link-hover">Register</Link></p>
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
        <div><img className='w-15 p-4' src={google} alt="" /></div>
        <div><img className='w-45 p-2' src={github} alt="" /></div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;