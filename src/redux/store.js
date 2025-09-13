import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from '../redux/userSlice.js';
import moviesReducer from '../redux/moviesSlice.js';
import configSliceReducer from '../redux/configSlice.js';

export const store = configureStore({
    reducer: {
        user: userSliceReducer,
        movies: moviesReducer,
        configData : configSliceReducer,
        devTools: true,
    },
});