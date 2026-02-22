import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data/data.json";

function RecipeDetail() {
  // 1️⃣ Get the ID from the URL
  const { id } = useParams();

  // 2️⃣ State to store the selected recipe
  const [recipe, setRecipe] = useState(null);

  // 3️⃣ Find the recipe when component mounts
  useEffect(() => {
    const foundRecipe = recipesData.find((item) => item.id === Number(id));
    setRecipe(foundRecipe);
  }, [id]);

  // 4️⃣ Handle case where recipe is not found
  if (!recipe) {
    return <p className="text-center mt-10">Recipe not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-xl bg-white mt-10">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>

      <p className="text-gray-600 mb-6">{recipe.summary}</p>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
