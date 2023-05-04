import React from 'react';
import fish from '../assets/fish.jpg'
import { Link } from 'react-router-dom';
const Special = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={fish} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Our Special Menu</h1>
      <p className="py-6">Are you intimidated by the thought of cooking a whole fish? Please don’t be. Whole fish is one of the most sensational and delicious ways of cooking fish at home. There’s more meat off of each fish, and less waste. It’s so much fun to tear into a whole fish at the table. There’s something primal about it. Cooking a whole fish is also a dramatic way to serve your family, friends and guests while enjoying the “oohs” and “aahs” from them.</p>
      <Link to='/chefrecipe/2'><button className="btn btn-primary">Try It</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Special;