import {configureStore} from '@reduxjs/toolkit'
import mainReducer from '../Reducers';


const store = configureStore({
    reducer: mainReducer,
})

export default store;