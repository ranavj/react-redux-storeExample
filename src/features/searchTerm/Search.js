import { useSelector, useDispatch } from 'react-redux';
import { selectSearchTerm, setSearchTerm } from './searchTermSlice';
export const Search = () => {
    const searchInput = useSelector(selectSearchTerm);
    const dispatch = useDispatch()

    const onSearchHandle = (value) => {
        dispatch(setSearchTerm(value))
    }

    return (
        <div className="grid-cols-12">
            <input 
                onKeyUp={(event) => onSearchHandle(event.target.value)}
                className="p-4 rounded-full block w-full border border-black"  
                type="text" 
                placeholder="Search Recipes"/>
                {searchInput}
        </div>
    )
}