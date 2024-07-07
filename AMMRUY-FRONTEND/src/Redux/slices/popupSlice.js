import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: 'popup',
    initialState: { show: false },
    reducers: {
        showPopup(state){
            state.show = !state.show
        }
    }
});

export const { showPopup } = popupSlice.actions;
export default popupSlice.reducer