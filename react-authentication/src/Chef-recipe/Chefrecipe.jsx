import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBeer, FaBiohazard, FaBirthdayCake, FaHeart, FaStar, FaThumbsUp } from 'react-icons/fa';
const Chefrecipe = () => {
    const [isFavorite, setIsFavorite] = useState(false);
const recipedata=useLoaderData()
console.log(recipedata);
//const [singleChef,setsingleChef]=useState(recipeId);
const { name, ingredients, bio, chef, recipes,likes,num_recipes,picture,experience_years,cooking_method,rating } = recipedata;

const handleFavoriteClick = () => {
    setIsFavorite(true);
    toast('Recipe added to favorites!');
  };


    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
        {/* Chef card */}
        <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden col-span-1 md:col-span-2 lg:col-span-1">
          <img className="w-full h-70 object-cover" src={chef.picture}  />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{chef.name}</div>
            <p className="text-gray-700 text-base mb-2 flex">{chef.bio}</p>
            <div className='flex flex-none gap-5 p-4'><p className="text-gray-700 text-base mb-2 flex"><FaThumbsUp ></FaThumbsUp>{chef.likes} likes</p>
            <p className="text-gray-700 text-base mb-2 flex"><FaBirthdayCake ></FaBirthdayCake>{chef.num_recipes} recipes created</p>
            <p className="text-gray-700 text-base mb-2 flex"><FaHeart></FaHeart>{chef.experience_years} years of experience</p></div>
          </div>
        </div>
        {/* Recipe cards */}
        
          <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden col-span-1 md:col-span-2 lg:col-span-1">
            <div className="px-6 py-4">
               <img className="w-full h-70 object-cover" src={picture}  />
              <div className="font-bold text-xl mb-2">{name}</div>
              
              <p className="text-gray-700 text-base mb-2">{cooking_method}</p>
              <p className="text-gray-700 text-base mb-2 flex p-3 align-items-center"><FaStar></FaStar>{rating} stars</p>
              <button
            disabled={isFavorite}
            onClick={handleFavoriteClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            {isFavorite ? 'Added to favorites!' : 'Add to favorites'}
          </button>
            </div>
          </div>
          <ToastContainer />
      </div>
)}



export default Chefrecipe;