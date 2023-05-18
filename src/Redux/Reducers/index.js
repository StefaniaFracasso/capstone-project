const initialState = {
    kanjiToBeReviewed: []
  }
  
  const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_REVIEW':
        return {
          ...state,
          kanjiToBeReviewed: [...state.kanjiToBeReviewed, action.payload]
        }
      case 'REMOVE_REVIEW':
        return {
          ...state,
          kanjiToBeReviewed: state.kanjiToBeReviewed.filter((kanji) => kanji._id !== action.payload),
        }
      default:
        return state
    }
  }
  
  export default mainReducer