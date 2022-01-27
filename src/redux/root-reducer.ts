import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' //using localstorage
import { userReducer } from "./user/user.reducer";



// represent all the state(reducer) for the App

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'] //what i want to persist
}

const rootReducer = combineReducers({
  user: userReducer
    
})

export default  persistReducer(persistConfig, rootReducer)