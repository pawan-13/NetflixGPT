import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainContainer = ({isSticky}) => {
    const movies = useSelector(store => store?.movies?.nowPlayingMovies);

    if (!movies) return null;

    const mainMovies = movies[0];

    const { original_title, overview, id } = mainMovies;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} isSticky={isSticky} />
        </div>
    )
}

export default MainContainer