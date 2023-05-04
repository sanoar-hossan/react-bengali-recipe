import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/Authprovider';

const Register = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const { createUser } = useContext(AuthContext);
  

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userphoto = form.photo.value;

    if (password.length < 6) {
      setError('password should at least 6 charecter');
      return;
    }

    setError('');

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        form.reset();
        
      })
      // updateUserdata(username,userphoto)
      // .then((result) => {
      //   const updatedUser = result.user;
      //   console.log(updatedUser);
      //   setUpdateUser(updatedUser);
      // })
      // .catch((error) => {
      //   setError(error.message);
      // });
  };

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="Your name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required/> </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name='photo' type="text" placeholder="Photo Url" className="input input-bordered" />
        
          <label className="label">
         <p> Already User ? Please<Link to='/login' className="label-text-alt link link-hover">Log In</Link></p>
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div className='text-danger py-3'>{error&& error}</div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;