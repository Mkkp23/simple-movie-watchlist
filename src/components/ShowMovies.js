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
            <h2 className="mt-2 text-2xl text-center text-primary-text">⛔ There is no movie.</h2>
        )
    } else {
        return (
            <>
                {
                    filteredMovies.map((movie) => {
                        return (
                            <Movie movie={movie} key={movie.name} />
                        )
                    })
                }
            </>
        )
    }
}

export default ShowMovies;