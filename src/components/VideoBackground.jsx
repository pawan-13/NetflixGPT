import { useEffect } from "react";
import { movieTrailer } from "../api/API"
import { addTrailerVideo } from "../redux/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
const VideoBackground = ({ movieId, isSticky }) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.trailerVideo);

  const fetchMovieTrailer = async () => {
    const data = await movieTrailer(movieId);
    const trailerVideo = data.results.filter(video => video.type === 'Trailer');
    const trailer = trailerVideo.length ? trailerVideo[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    fetchMovieTrailer();
  }, []);

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + movies?.key + "?autoplay=1&mute=1"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={isSticky ? { marginTop: "64px" } : {}}
      />
    </div>
  )
}

export default VideoBackground