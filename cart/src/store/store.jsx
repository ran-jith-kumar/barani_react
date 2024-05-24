import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/reducer/cart'

const store = configureStore({
    reducer:{
          cart : cartReducer
    }
})

export default store;