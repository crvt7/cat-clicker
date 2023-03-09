import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import counterReducer from "./features/counter/counterSlice";
import statsReducer from "./features/statScreen/statScreenSlice";
import userReducer from "./features/header/userSlice"
import bigCatReducer from "./features/bigCat/bigCattSlice"

const appReducer = combineReducers({
  counter: counterReducer,
  stats: statsReducer,
  user: userReducer,
  bigCat: bigCatReducer
 });
 
 const rootReducer = (state:any,action:any) => {
    if (action.type === "purge"){
        storage.removeItem('persist:root')
        return appReducer(undefined,action)
    }

    return appReducer(state,action)
 }

 const persistConfig = {
     key: 'root',
     storage
 };
 
 const persistedReducer = persistReducer(persistConfig, rootReducer);
 
 
 const store = configureStore({
     reducer: persistedReducer,
     devTools: process.env.NODE_ENV !== 'production',
     middleware: [thunk]
 });
 
 export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


