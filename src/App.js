import logo from './logo.svg';
import './App.css';
import { Search } from './features/searchTerm/Search';
import { AllRecipes } from './features/allRecipes/AllRecipes';
import { FavoriteRecipes } from './features/favoriteRecipes/FavoriteRecipes';

function App() {
  return (
    <div className="container max-auto p-12">
      <div className="grid gap-y-6">
        {/* search  */}
        <Search />
        <FavoriteRecipes />
        <AllRecipes />        
      </div>
    </div>
  );
}

export default App;
