import { useMovies } from "../contexts/MoviesContext";
import Movie from "./Movie";

const ShowMovies = ({ active }) => {
    const { movies } = useMovies();

    let filteredMovies;
    switch (active) {
        case "Watched":
            filteredMovies = movies.filter((movie) => movie.watchStatus === true);
            break;
        case "To Watch":
            filteredMovies = movies.filter((movie) => movie.watchStatus === false);
            break;
        case "All":
        default:
            filteredMovies = [...movies];
            break;
    }

    if (!filteredMovies?.length) {
        return (
            <div className="flex flex-col items-center justify-center py-12 px-4">
                <div className="text-6xl mb-4">
                    {active === "Watched" ? "🎬" : active === "To Watch" ? "📝" : "🎥"}
                </div>
                <h2 className="text-2xl font-semibold text-primary-text text-center mb-2">
                    {active === "Watched" 
                        ? "No Watched Movies Yet" 
                        : active === "To Watch" 
                            ? "No Movies in Watchlist" 
                            : "Your Watchlist is Empty"}
                </h2>
                <p className="text-accent-1 text-center max-w-md">
                    {active === "Watched" 
                        ? "Start watching movies and mark them as watched to see them here!" 
                        : active === "To Watch" 
                            ? "Add some movies to your watchlist to get started!" 
                            : "Add your first movie to start building your watchlist!"}
                </p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {filteredMovies.map((movie) => (
                <Movie movie={movie} key={movie.name} />
            ))}
        </div>
    )
}

export default ShowMovies;