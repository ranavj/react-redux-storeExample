import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addToFavoriteRecipe } from "../favoriteRecipes/favoriteRecipesSlice";
import { loadAllRecipies, selectSearchFilterRecipes } from "./allRecipesSlice"

export const AllRecipes = () => {

    const allRecipes = useSelector(selectSearchFilterRecipes);
    const dispatch = useDispatch();
    const loadFirstRender = () =>{
        dispatch(loadAllRecipies())
    }
    useEffect(loadFirstRender, [])
    
    const addToFavHandle = (recipe) => {
        dispatch(addToFavoriteRecipe(recipe));
        console.log(recipe);
    }
    return (
        <div className="grid-cols-12">
        <h2 className="antialiased text-lg font-semibold my-4 ">All Recipes</h2>        
        <div className="grid lg:grid-cols-6 sm:grid-cols-1 gap-4">          
            {allRecipes && allRecipes.map(recipe => {
                return (
                    <div key={recipe.id} className="p-4 border border-black rounded hover:bg-slate-900/90	 hover:text-white relative">
                        <label className="text-lg font-semibold">{recipe.name}</label>
                        <img src={ recipe.img} alt="" />
                        <button 
                            onClick={() => addToFavHandle(recipe) }
                            className="text-sm bg-orange-100 rounded hover:bg-orange-200 w-25 p-1 absolute inset-x-0 bottom-12">Add to Favorites</button>
                    </div>  
                )
            })}
        </div>
        <hr className="my-2"/>
      </div>
    )
}