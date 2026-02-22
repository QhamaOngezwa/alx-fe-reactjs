import {useState, useEffect} from react
import recipesData from '../data/recipesData.json'

function HomePage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    setRecipes(recipesData)
  }, []) 

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Recipes
      </h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600">
                {recipe.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage;