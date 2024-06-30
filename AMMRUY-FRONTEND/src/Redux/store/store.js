import { configureStore } from "@reduxjs/toolkit";
import popupReducer from '../slices/popupSlice.js'

const store = configureStore({
    reducer: {
        popup: popupReducer
    }
});

export default store;