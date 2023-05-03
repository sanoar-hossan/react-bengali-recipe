import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Chefrecipe = ([]) => {

const recipeId=useLoaderData()
console.log(recipeId);
const [singleChef,setsingleChef]=useState(recipeId);


    return (
        <div>
            <h1>ChefRecipe page</h1>
        </div>
    );
};

export default Chefrecipe;