import React, { useEffect, useState } from 'react';
import hilsa from '../assets/hilsa.jpg'
const Hero = () => {
  
    return (
      <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row pr-10">
          <img  src={hilsa} className="max-w-sm rounded-lg shadow-2xl " />
          <div className='pl-10'>
            <h1 className="text-5xl font-bold">Special Offer</h1>
            <p className="py-6">Offer for Limited time.Hurry up!!</p>
            <button className="btn btn-primary">Eat Now</button>
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default Hero;