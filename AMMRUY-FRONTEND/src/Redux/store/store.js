import { configureStore } from "@reduxjs/toolkit";
import popupReducer from '../slices/popupSlice.js';
import darkModeReducer from '../slices/themeSlice.js'

const store = configureStore({
    reducer: {
        popup: popupReducer,
        darkMode: darkModeReducer,
    }
});

export default store;