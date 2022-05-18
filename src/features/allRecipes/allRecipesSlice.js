import allRecipesData from "../../data"
import { selectFavRecipes } from "../favoriteRecipes/favoriteRecipesSlice";
import { selectSearchTerm } from "../searchTerm/searchTermSlice";
export const loadAllRecipies = () => {
    return {
        type: 'allRecipes/loadAllRecipes',
        payload: allRecipesData
    }
}

const initialRecipes = allRecipesData;
export const allRecipesReducer = (allRecipes = initialRecipes, action) => {
    switch (action.type) {
        case 'allRecipes/loadAllRecipes':
            return action.payload;
        case 'favoriteRecipes/addToFavoriteRecipe':
            return allRecipes.filter(recipe => recipe.id !== action.payload.id)
        case 'favoriteRecipes/removeToFavoriteRecipe':
            return [...allRecipes, action.payload];
        default:
            return allRecipes;
    }
}

export const selectLoadRecipes = state => state.allRecipes;

export const selectSearchFilterRecipes = state => {
    const allRecipes = selectLoadRecipes(state);
    const searchTerm = selectSearchTerm(state);
    return allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

