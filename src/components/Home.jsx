import { movieLists, popularMovies, topRatedMovies, upcomingMovies } from '../api/API';
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { addNowPlayingMovies, addNowPopularMovies, addNowTopRatedMovies, addNowUpComingMovies } from '../redux/moviesSlice';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPtSearch from './GPtSearch';
import Header from './Header';
const Home = () => {
    const dispatch = useDispatch();
    const [isSticky, setIsSticky] = useState(false);
    const [isShowGptSearch, setIsShowGptSearch] = useState(false);
    const fetchMovieLists = async () => {
        const data = await movieLists();
        dispatch(addNowPlayingMovies(data.results));
    }

    const fetchPopularMovies = async () => {
        const data = await popularMovies();
        dispatch(addNowPopularMovies(data.results));
    }

    const fetchTopRatedMovies = async () => {
        const data = await topRatedMovies();
        dispatch(addNowTopRatedMovies(data.results));
    }

    const fetchUpComingMovies = async () => {
        const data = await upcomingMovies();
        dispatch(addNowUpComingMovies(data.results));
    }

    useEffect(() => {
        fetchMovieLists();
        fetchPopularMovies();
        fetchTopRatedMovies();
        fetchUpComingMovies();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="w-full min-h-screen">
            <div className={isSticky ? "fixed top-0 left-0 w-full z-50" : "absolute z-50 top-0 w-full"}
                style={isSticky ? { background: "rgba(20, 20, 20, 0.7)", transition: "background 0.3s" } : {}}>
                <Header setIsShowGptSearch={setIsShowGptSearch} isShowGptSearch={isShowGptSearch} />
            </div>
            {
                isShowGptSearch ? (<GPtSearch />) : (
                    <>
                        <MainContainer isSticky={isSticky} />
                        <SecondaryContainer />
                    </>
                )
            }
        </div>
    )
}
export default Home