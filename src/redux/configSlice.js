import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lang: 'en',
}
const configSlice = createSlice({
    name: "configData",
    initialState,
    reducers: {
        langpreference: (state, action) => {
            state.lang = action.payload;
        }
    }
});

export const { langpreference } = configSlice.actions;
export default configSlice.reducer;