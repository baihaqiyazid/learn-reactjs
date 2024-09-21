import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer
    },
});

console.log("on create store", store.getState());

store.subscribe(() => {
    console.log("on update store", store.getState());
});

export default store