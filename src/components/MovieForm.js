import { useState } from "react";

import { useMovies } from "../Contexts/MoviesContext";

const MovieForm = () => {

    const { movies, setMovies } = useMovies();

    const defaultMovie = {
        name: "",
        genre: "",
        rating: 0,
        notes: "",
        watchStatus: false,
    }

    const [movie, setMovie] = useState(defaultMovie)

    const changeHandler = (event) => {
        setMovie({ ...movie, [event.target.id]: event.target.value });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setMovies([...movies, movie])
    }

    return (
        <div id="movie-holder" className="container mx-auto mt-8 p-6 rounded-lg bg-background border border-accent-1/30 shadow-lg max-w-2xl">
            <h2 className="text-primary-text text-3xl font-semibold mb-6 border-b border-accent-1/30 pb-3">Add New Movie</h2>

            <form className="space-y-5" onSubmit={submitHandler}>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="text-primary-text font-medium">Movie Name</label>
                    <input
                        type="text"
                        id="name"
                        value={movie.name}
                        required
                        onChange={changeHandler}
                        className="bg-background border border-accent-1/50 text-primary-text p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-1 focus:border-transparent transition-all duration-200"
                        placeholder="Enter movie title"
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="genre" className="text-primary-text font-medium">Genre</label>
                    <select
                        id="genre"
                        value={movie.genre}
                        onChange={changeHandler}
                        required
                        className="bg-background border border-accent-1/50 text-primary-text p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-1 focus:border-transparent transition-all duration-200"
                    >
                        <option value="" className="text-primary-text">Select a genre</option>
                        <option value="action" className="text-primary-text">Action</option>
                        <option value="comedy" className="text-primary-text">Comedy</option>
                        <option value="drama" className="text-primary-text">Drama</option>
                        <option value="horror" className="text-primary-text">Horror</option>
                        <option value="sci-fi" className="text-primary-text">Sci-Fi</option>
                    </select>
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="rating" className="text-primary-text font-medium">Rating (1-10)</label>
                    <input
                        type="number"
                        id="rating"
                        min="1"
                        max="10"
                        value={movie.rating}
                        onChange={changeHandler}
                        required
                        className="bg-background border border-accent-1/50 text-primary-text p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-1 focus:border-transparent transition-all duration-200"
                        placeholder="Rate from 1 to 10"
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="notes" className="text-primary-text font-medium">Notes</label>
                    <textarea
                        id="notes"
                        rows="3"
                        value={movie.notes}
                        onChange={changeHandler}
                        required
                        className="bg-background border border-accent-1/50 text-primary-text p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-accent-1 focus:border-transparent transition-all duration-200"
                        placeholder="Add your thoughts about this movie"
                    ></textarea>
                </div>

                <div className="flex flex-col space-y-2 border border-accent-1/50 p-3 rounded-md ">
                    <label className="text-primary-text font-medium">Watch Status</label>
                    <div className="flex space-x-6 mt-1">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="watch-status"
                                value="watchLater"
                                className="mr-2"
                                checked={!movie.watchStatus}
                                onChange={() => setMovie({ ...movie, watchStatus: false })}
                            />
                            <span className="text-primary-text">Watch Later</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="watch-status"
                                value="alreadyWatched"
                                className="mr-2"
                                checked={movie.watchStatus}
                                onChange={() => setMovie({ ...movie, watchStatus: true })}
                            />
                            <span className="text-primary-text">Already Watched</span>
                        </label>
                    </div>
                </div>

                <div className="pt-3 flex justify-center">
                    <button
                        type="submit"
                        className="bg-button hover:bg-button/90 text-primary-text font-medium py-3 px-6 rounded-md transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent-1"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default MovieForm;