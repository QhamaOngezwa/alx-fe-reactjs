import { useRecipeStore } from "./src/useRecipeStore";
import { Link } from "react-router-dom";


const RecipeList = () => {
const filteredRecipes = useRecipeStore(
    (state) => state.filteredRecipes
  );
    return (
        <div>
            {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p> 
        </div>
            ))}
        </div>
    );

};;
export RecipeList;