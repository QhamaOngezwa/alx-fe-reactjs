import { useRecipeStore } from './recipeStore';
import { Link } from "react-router-dom";

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
export default RecommendationsList;