export const setSearchTerm = (term) => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}

export const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm'
    }
}

const initialSearch = '';
export const searchTermReducer = (search = initialSearch, action) => {
    switch (action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload;
        case 'searchTerm/clearSearchTerm':
            return ''
        default:
            return initialSearch;
    }
}

export const selectSearchTerm = state => state.searchTerm;