import { useDispatch, useSelector } from "react-redux"
import { removeToFavoriteRecipe, selectFilteredFavoriteRecipes } from "./favoriteRecipesSlice"

export const FavoriteRecipes = () => {
  const favRecipes = useSelector(selectFilteredFavoriteRecipes);
  const dispatch = useDispatch();
  
  const removeFavRecipeHandle = (recipe) => {
    dispatch(removeToFavoriteRecipe(recipe))
  }
  return (
    <div className="grid-cols-12">
      <h2 className="antialiased text-lg font-semibold my-4 ">Favorite Recipes</h2>
      <div className="grid grid-cols-6 gap-4">
        {favRecipes && favRecipes.map(recipe => {
          return (
            <div key={recipe.id} className="p-4 border border-black rounded hover:bg-slate-900/90	 hover:text-white relative">
              <label className="text-lg font-semibold">{recipe.name}</label>
              <img src={recipe.img} alt="" />
              <button 
                onClick={() => removeFavRecipeHandle(recipe)}
                className="text-sm bg-orange-100 rounded	hover:bg-orange-200 w-25 p-1 absolute inset-x-0 bottom-12">Remove Favorites</button>
            </div>
          )
        })}
      </div>
      <hr className="my-2" />
    </div>
  )
}