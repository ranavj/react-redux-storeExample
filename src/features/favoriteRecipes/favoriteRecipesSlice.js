import { selectSearchTerm } from "../searchTerm/searchTermSlice";

export const addToFavoriteRecipe = (recipe) => {
    return {
        type: 'favoriteRecipes/addToFavoriteRecipe',
        payload: recipe
    }
}

export const removeToFavoriteRecipe = (recipe) => {
    return {
        type: 'favoriteRecipe/removeToFavoriteRecipe',
        payload: recipe
    }
}

const initialFavRecipes = [];
export const favoriteRecipesReducer = (favoriteRecipes = initialFavRecipes, action) => {
    switch (action.type) {
        case 'favoriteRecipes/addToFavoriteRecipe':
            return [...favoriteRecipes, action.payload];   
        case 'favoriteRecipes/removeToFavoriteRecipe':
            return favoriteRecipes.filter(recipe => recipe.id !== action.payload.id)
        default:
            return favoriteRecipes;
    }
}

export const selectFavRecipes = state => state.favoriteRecipes;
export const selectFilteredFavoriteRecipes = (state) => {
    const favoriteRecipes = selectFavRecipes(state);
    const searchTerm = selectSearchTerm(state);
  
    return favoriteRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };