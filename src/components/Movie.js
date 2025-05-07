const Movie = ({ movie }) => {
    return (
        <div className="group relative bg-background/50 backdrop-blur-sm border-2 border-accent-1/30 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-accent-1/50">
            <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    movie.watchStatus 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                }`}>
                    {movie.watchStatus ? 'Watched' : 'To Watch'}
                </span>
            </div>

            <h3 className="text-2xl font-bold text-primary-text mb-4 pr-20 group-hover:text-accent-1 transition-colors duration-200">
                {movie.name}
            </h3>

            <div className="space-y-4">
                <div className="flex items-center space-x-2">
                    <span className="text-accent-1 font-medium">Genre:</span>
                    <span className="text-primary-text capitalize">{movie.genre}</span>
                </div>

                <div className="flex items-center space-x-2">
                    <span className="text-accent-1 font-medium">Rating:</span>
                    <div className="flex items-center">
                        <span className="text-primary-text mr-2">{movie.rating}/10</span>
                        <div className="text-yellow-400">
                            {'⭐'.repeat(movie.rating)}
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <span className="text-accent-1 font-medium block mb-2">Notes:</span>
                    <p className="text-primary-text bg-background/50 p-3 rounded-lg border border-accent-1/20">
                        {movie.notes}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Movie;