import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { AuthContext } from '../providers/Authprovider';
import {  FaHeart, FaStar, FaThumbsUp } from 'react-icons/fa';
const ChefData = () => {
const [chefinfos,setchefinfos]=useState([]);

useEffect(()=>{
fetch('https://recipe-server-sanoar-hossan.vercel.app/chefdetails')
.then(res=>res.json())
.then(data=>setchefinfos(data))
},[])

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <h1 className="col-span-full text-center font-bold p-6 text-4xl ">Chef Information</h1>
      
      {chefinfos.map(chefinfo => (
        <LazyLoad key={chefinfo.id} height={562}>
        <div >
        <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src={chefinfo.picture} alt={chefinfo.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 py-4">{chefinfo.name}</div>
            <p className="text-gray-700 text-base mb-2">
             <FaStar></FaStar> {chefinfo.experience_years} years of experience
            </p>
            <div className='flex gap-20 py-4'><p className="text-gray-700 text-base mb-2">
             <FaHeart></FaHeart> {chefinfo.num_recipes} recipes created
            </p>
            <p className="text-gray-700 text-base mb-2"><FaThumbsUp></FaThumbsUp>{chefinfo.likes} likes</p></div>
            <Link to={`/chefrecipe/${chefinfo.id}`} className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              View Recipes
            </Link>
          </div>
        </div>
       
      </div>
      </LazyLoad>
      ))}
    </div>
    );
};

export default ChefData;