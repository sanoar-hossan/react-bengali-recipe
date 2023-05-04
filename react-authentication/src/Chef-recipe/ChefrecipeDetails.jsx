import React from 'react';

const ChefrecipeDetails = () => {
    const { id } = useParams();
  const [chefRecipes, setChefRecipes] = useState([]);

  useEffect(() => {
    fetch(`https://recipe-server-sanoar-hossan.vercel.app/chefdetails/${id}`)
      .then(res => res.json())
      .then(data => setChefRecipes(data.recipes));
  }, [id]);
    return (
        <div>
        <h1>Chef Recipes</h1>
        {chefRecipes.map(recipe => (
          <div key={recipe._id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <ul>
              {recipe.ingredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
};

export default ChefrecipeDetails;