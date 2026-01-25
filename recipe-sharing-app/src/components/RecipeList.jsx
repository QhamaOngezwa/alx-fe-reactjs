import { useRecipeStore } from "./src/useRecipeStore";

const RecipeList = () => {
    const recipes = useRecipeStore(state =. state.recipes);
  filteredRecipes: [],

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