import React from 'react';
import hilsa from '../assets/hilsa.jpg'
import panta from '../assets/panta.jpg'
import fish from '../assets/fish.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    
    return (

<div className="hero min-h-screen" style={{ backgroundImage: `url(${fish})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Bengali Recipe!</h1>
      <p className="mb-5">Try all kind of Bengali foods and enjoy.</p>
      <button className="bg-blue-700  hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mt-4">Explore All Recipe</button>
    </div>
  </div>
</div>


      

    );
};

export default Banner;