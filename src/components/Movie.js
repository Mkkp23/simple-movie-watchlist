
const Movie = ({ movie }) => {

    return (
        <div className="flex flex-col space-y-2 mt-2 p-4 border border-accent-1/30 rounded-md bg-background shadow-md mb-4 items-center
        md:flex-row md:space-x-10
        hover:shadow-2xl transition-all duration-200">
            <h3 className="text-xl font-semibold text-primary-text">{movie.name}</h3>
            <p className="text-primary-text">Genre: {movie.genre}</p>
            <p className="text-primary-text">Rating: {movie.rating}/10</p>
            <p className="text-primary-text">Notes: {movie.notes}</p>
        </div>
    )
}

export default Movie;