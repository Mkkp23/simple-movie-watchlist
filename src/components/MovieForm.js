import { useState, useEffect, useRef } from "react";
import { useMovies } from "../contexts/MoviesContext";
import { useNavigate } from "react-router-dom";

const MovieForm = () => {
    const { movies, setMovies } = useMovies();
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isGenreOpen, setIsGenreOpen] = useState(false);
    const navigate = useNavigate();
    const genreRef = useRef(null);

    const genres = [
        { value: "action", label: "Action", icon: "🎬" },
        { value: "comedy", label: "Comedy", icon: "😄" },
        { value: "drama", label: "Drama", icon: "🎭" },
        { value: "horror", label: "Horror", icon: "👻" },
        { value: "sci-fi", label: "Sci-Fi", icon: "🚀" },
        { value: "romance", label: "Romance", icon: "❤️" },
        { value: "thriller", label: "Thriller", icon: "🔪" },
        { value: "animation", label: "Animation", icon: "🎨" },
        { value: "documentary", label: "Documentary", icon: "📹" },
        { value: "fantasy", label: "Fantasy", icon: "✨" }
    ];

    const defaultMovie = {
        name: "",
        genre: "",
        rating: 0,
        notes: "",
        watchStatus: false,
        dateAdded: new Date().toISOString().split('T')[0]
    }

    const [movie, setMovie] = useState(defaultMovie);

    // Reset form when component mounts
    useEffect(() => {
        setMovie(defaultMovie);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (genreRef.current && !genreRef.current.contains(event.target)) {
                setIsGenreOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeHandler = (event) => {
        setMovie({ ...movie, [event.target.id]: event.target.value });
        // Clear any previous status messages when user starts typing
        setSubmitStatus({ type: '', message: '' });
    }

    const selectGenre = (genre) => {
        setMovie({ ...movie, genre: genre.value });
        setIsGenreOpen(false);
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Validate if movie name already exists
            if (movies.some(m => m.name.toLowerCase() === movie.name.toLowerCase())) {
                setSubmitStatus({
                    type: 'error',
                    message: 'This movie is already in your watchlist!'
                });
                return;
            }

            // Add movie with current date
            const newMovie = {
                ...movie,
                dateAdded: new Date().toISOString().split('T')[0]
            };

            setMovies([...movies, newMovie]);
            setMovie(defaultMovie);
            setSubmitStatus({
                type: 'success',
                message: 'Movie added successfully! 🎬'
            });

            // Clear success message and redirect after 2 seconds
            setTimeout(() => {
                setSubmitStatus({ type: '', message: '' });
                navigate('/movie/list');
            }, 2000);
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'An error occurred while adding the movie. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    const selectedGenre = genres.find(g => g.value === movie.genre);

    return (
        <div className="container mx-auto mt-8 p-8 rounded-xl bg-background border border-accent-1/30 shadow-2xl max-w-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8 border-b border-accent-1/30 pb-4">
                <div>
                    <h2 className="text-4xl font-bold text-primary-text">
                        Add New Movie
                        <span className="block text-lg font-normal text-accent-1 mt-2">
                            Keep track of your favorite films
                        </span>
                    </h2>
                </div>
                {/* <div className="text-4xl">🎬</div> */}
            </div>

            {submitStatus.message && (
                <div className={`mb-6 p-4 rounded-lg flex items-center ${
                    submitStatus.type === 'error' 
                        ? 'bg-red-100 border border-red-400 text-red-700' 
                        : 'bg-green-100 border border-green-400 text-green-700'
                }`}>
                    <span className="text-2xl mr-3">
                        {submitStatus.type === 'error' ? '⚠️' : '✨'}
                    </span>
                    {submitStatus.message}
                </div>
            )}

            <form className="space-y-6" onSubmit={submitHandler}>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="text-primary-text font-medium text-lg">
                        Movie Name
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={movie.name}
                        required
                        onChange={changeHandler}
                        className="bg-background/50 border-2 border-accent-1/50 text-primary-text p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1 focus:border-transparent transition-all duration-200 text-lg"
                        placeholder="Enter movie title"
                        disabled={isSubmitting}
                    />
                </div>

                <div className="flex flex-col space-y-2" ref={genreRef}>
                    <label className="text-primary-text font-medium text-lg">
                        Genre
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsGenreOpen(!isGenreOpen)}
                            className={`w-full bg-background/50 border-2 border-accent-1/50 text-primary-text p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1 focus:border-transparent transition-all duration-200 text-lg flex items-center justify-between ${
                                isGenreOpen ? 'ring-2 ring-accent-1 border-transparent' : ''
                            }`}
                            disabled={isSubmitting}
                        >
                            <div className="flex items-center">
                                {selectedGenre ? (
                                    <>
                                        <span className="mr-2">{selectedGenre.icon}</span>
                                        <span>{selectedGenre.label}</span>
                                    </>
                                ) : (
                                    <span className="text-primary-text/50">Select a genre</span>
                                )}
                            </div>
                            <svg 
                                className={`w-5 h-5 text-accent-1 transition-transform duration-200 ${isGenreOpen ? 'transform rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {isGenreOpen && (
                            <div className="absolute z-10 w-full mt-2 bg-background border-2 border-accent-1/50 rounded-lg shadow-lg overflow-hidden">
                                {genres.map((genre) => (
                                    <button
                                        key={genre.value}
                                        type="button"
                                        onClick={() => selectGenre(genre)}
                                        className={`w-full px-4 py-3 text-left hover:bg-accent-1/10 transition-colors duration-200 flex items-center ${
                                            movie.genre === genre.value ? 'bg-accent-1/20' : ''
                                        }`}
                                    >
                                        <span className="mr-3">{genre.icon}</span>
                                        <span className="text-primary-text">{genre.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="rating" className="text-primary-text font-medium text-lg">
                        Rating (1-10)
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                        <input
                            type="number"
                            id="rating"
                            min="1"
                            max="10"
                            value={movie.rating}
                            onChange={changeHandler}
                            required
                            className="bg-background/50 border-2 border-accent-1/50 text-primary-text p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1 focus:border-transparent transition-all duration-200 text-lg w-full"
                            placeholder="Rate from 1 to 10"
                            disabled={isSubmitting}
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-400">
                            {movie.rating > 0 && '⭐'.repeat(movie.rating)}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="notes" className="text-primary-text font-medium text-lg">
                        Notes
                        <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                        id="notes"
                        rows="3"
                        value={movie.notes}
                        onChange={changeHandler}
                        required
                        className="bg-background/50 border-2 border-accent-1/50 text-primary-text p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent-1 focus:border-transparent transition-all duration-200 text-lg"
                        placeholder="Add your thoughts about this movie"
                        disabled={isSubmitting}
                    ></textarea>
                </div>

                <div className="flex flex-col space-y-2 border-2 border-accent-1/50 p-4 rounded-lg">
                    <label className="text-primary-text font-medium text-lg">Watch Status</label>
                    <div className="flex space-x-8 mt-2">
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="watch-status"
                                value="watchLater"
                                className="w-5 h-5 text-accent-1 focus:ring-accent-1"
                                checked={!movie.watchStatus}
                                onChange={() => setMovie({ ...movie, watchStatus: false })}
                                disabled={isSubmitting}
                            />
                            <span className="ml-3 text-primary-text text-lg">Watch Later</span>
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="radio"
                                name="watch-status"
                                value="alreadyWatched"
                                className="w-5 h-5 text-accent-1 focus:ring-accent-1"
                                checked={movie.watchStatus}
                                onChange={() => setMovie({ ...movie, watchStatus: true })}
                                disabled={isSubmitting}
                            />
                            <span className="ml-3 text-primary-text text-lg">Already Watched</span>
                        </label>
                    </div>
                </div>

                <div className="pt-4 flex justify-center space-x-4">
                    <button
                        type="button"
                        onClick={() => navigate('/movie/list')}
                        className="px-8 py-4 bg-background/50 border-2 border-accent-1/50 text-primary-text font-semibold rounded-lg hover:bg-background/80 transition-all duration-200"
                        disabled={isSubmitting}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-accent-1 hover:bg-accent-1/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent-1 focus:ring-offset-2 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Adding Movie...
                            </span>
                        ) : (
                            'Add to Watchlist'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default MovieForm;