import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    return (
        <div className="px-4 py-3">
            <h1 className="text-2xl mb-3 font-bold text-white">{title}</h1>
            <div className="flex overflow-x-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overflowY: 'hidden' }}>
                <div className="flex items-center justify-start">
                    {
                        movies?.map((movie) => (<MovieCard key={movie.id} posterPath={movie.poster_path} />))
                    }

                </div>
            </div>
        </div>
    )
}   

export default MovieList