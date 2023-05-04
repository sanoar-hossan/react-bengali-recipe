import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpg'
import { AuthContext } from '../providers/Authprovider';

const Header = () => {



  const {logOut,user}=useContext(AuthContext)

  const handleSignOut=()=>{

logOut()
.then(result=>{

})
.catch(error=>
  console.log(error))
  }
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Bengali Recipes</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Home</Link></li>
   
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
    </ul>
   
  </div>
  <div className="navbar-end">
  
        <div>
        {user ? user.email:
          
          <Link to='/login'><button className='text-black' >Log In</button></Link>
        }
        </div>
        <div>
          {user&& <button className='text-black px-4' onClick={handleSignOut}>Log Out</button>}
        </div>
     
  </div>
</div>
    );
};

export default Header;
