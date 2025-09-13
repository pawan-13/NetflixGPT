import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies: null,
    trailerVideo: null,
    nowPopularMovies: null,
    nowTopRatedMovies: null,
    nowUpComingMovies: null,
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addNowPopularMovies: (state, action) => {
            state.nowPopularMovies = action.payload
        },
        addNowTopRatedMovies: (state, action) => {
            state.nowTopRatedMovies = action.payload
        },
        addNowUpComingMovies: (state, action) => {
            state.nowUpComingMovies = action.payload
        }
    }
});

export const { addNowPlayingMovies, addTrailerVideo, addNowPopularMovies, addNowTopRatedMovies, addNowUpComingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;