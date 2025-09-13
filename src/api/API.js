import { API_OPTIONS } from "../utils/constants"
export const movieLists = async () => {
    const API_BASE_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
    try {
        const response = await fetch(API_BASE_URL, API_OPTIONS);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message, 'error')
    }
}

//Movie Trailer
export const movieTrailer = async (id) => {
    const API_BASE_TRAILER = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    try {
        const response = await fetch(API_BASE_TRAILER, API_OPTIONS);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message, 'error');
    }
}

//Popular Movies
export const popularMovies = async () => {
    const API_BASE_POPULAR = 'https://api.themoviedb.org/3/movie/popular';
    try {
        const response = await fetch(API_BASE_POPULAR, API_OPTIONS);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message, 'error');
    }
}

//Top Rated
export const topRatedMovies = async () => {
    const API_BASE_TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated';
    try {
        const response = await fetch(API_BASE_TOP_RATED, API_OPTIONS);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message, 'error');
    }
}

//Upcoming Movies
export const upcomingMovies = async () => {
    const API_BASE_UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming';
    try {
        const response = await fetch(API_BASE_UPCOMING, API_OPTIONS);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message, 'error');
    }
}