import { legacy_createStore as createStore, combineReducers } from 'redux';
import { allRecipesReducer } from './features/allRecipes/allRecipesSlice';
import { favoriteRecipesReducer } from './features/favoriteRecipes/favoriteRecipesSlice';
import { searchTermReducer } from './features/searchTerm/searchTermSlice';

export const store = createStore(combineReducers({
    allRecipes: allRecipesReducer,
    searchTerm: searchTermReducer,
    favoriteRecipes: favoriteRecipesReducer
}));