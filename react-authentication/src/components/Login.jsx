import React, { useContext, useState } from 'react';
import google from '../assets/google-signin-button.png'
import github from '../assets/github-sign-in.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/Authprovider';

const Login = () => {
  const {signIn,googleSignIn,githubSignIn}=useContext(AuthContext)
  
  const [user,setUser]=useState(null)
const [error,setError]=useState('')

const handleGoogle=()=>{
  googleSignIn()
  .then(result=>{
const googleuser=result.user;
console.log(googleuser);
setUser(googleuser)
  })
  .catch(error=>{
    setError(error);
  })
 }
const handleGithub=()=>{
  githubSignIn()
  .then(result=>{
const githubuser=result.user;
console.log(githubuser);
setUser(githubuser);
  })
  .catch(error=>{
    setError(error)
  })
 }

 

const handleLogin=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
setError('')
    signIn(email,password)
    .then(result=>{
      const loginUser=result.user;
      console.log(user);
      setUser(loginUser);
      form.reset();
      
    })
    .catch(error=>{
      setError(error.message)
    })

   

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
          <input name='email' type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
          <p>New User ? Please <Link to='/register' className="label-text-alt link link-hover">Register</Link></p>
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>{error}</div>
        </form>
        <div><img onClick={handleGoogle} className='w-15 p-4' src={google} alt="" /></div>
        <div onClick={handleGithub}><img className='w-45 p-2' src={github} alt="" /></div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;