import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import mainReducer from '../Reducers'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, mainReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

const persistor = persistStore(store)

export { persistor }
export default store
