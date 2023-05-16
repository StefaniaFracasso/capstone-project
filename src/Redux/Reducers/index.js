const initialState = {
    favorites: []
  }
  
  const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        }
      case 'REMOVE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.filter((kanji) => kanji._id !== action.payload),
        }
      default:
        return state
    }
  }
  
  export default mainReducer