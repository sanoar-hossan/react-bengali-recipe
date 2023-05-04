import React from 'react';
import hilsa from '../assets/hilsa.jpg'
import panta from '../assets/panta.jpg'
import fish from '../assets/fish.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    const bannerStyle = {
    backgroundImage: `url(${fish})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '96vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center'
  };
    return (
        <div style={bannerStyle} className='flex flex-col '>
         
      <div className='bg-blur'><h1 className="text-3xl font-bold mb-2 text-black">Welcome to Bengali Recipe!</h1>
      <p className="text-lg mb-4 text-black font-bold pt-4 pb-12">Try all kind of Bengali foods and enjoy.</p></div>
      
      <Link to="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore All Recipe</Link>
    </div>
      

    );
};

export default Banner;