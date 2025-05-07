import { Link } from 'react-router-dom';
import { useMovies } from '../Contexts/MoviesContext';

const Home = () => {
    const { movies } = useMovies();
    const watchedCount = movies.filter(movie => movie.watchStatus).length;
    const toWatchCount = movies.filter(movie => !movie.watchStatus).length;

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-10">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-accent-1/10 rounded-full">
                            <svg className="w-16 h-16 text-accent-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold text-primary-text mb-6">
                        Your Movie Watchlist
                        <span className="block text-2xl font-normal text-accent-1 mt-2">
                            Keep track of your favorite films
                        </span>
                    </h1>
                    <p className="text-lg text-primary-text/80 mb-8">
                        Organize your movie collection, track what you've watched, and plan what to watch next.
                    </p>
                    <Link 
                        to="/movie/add"
                        className="inline-flex items-center px-8 py-4 bg-accent-1 text-white font-semibold rounded-lg shadow-lg hover:bg-accent-1/90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Add New Movie
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Stats Section */}
            <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {/* Total Movies Card */}
                    <div className="bg-background/50 backdrop-blur-sm border-2 border-accent-1/30 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="p-3 bg-accent-1/10 rounded-lg w-fit mb-4">
                            <svg className="w-8 h-8 text-accent-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-primary-text mb-2">Total Movies</h3>
                        <p className="text-3xl font-bold text-accent-1">{movies.length}</p>
                    </div>

                    {/* Watched Movies Card */}
                    <div className="bg-background/50 backdrop-blur-sm border-2 border-accent-1/30 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="p-3 bg-accent-1/10 rounded-lg w-fit mb-4">
                            <svg className="w-8 h-8 text-accent-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-primary-text mb-2">Watched</h3>
                        <p className="text-3xl font-bold text-accent-1">{watchedCount}</p>
                    </div>

                    {/* To Watch Card */}
                    <div className="bg-background/50 backdrop-blur-sm border-2 border-accent-1/30 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="p-3 bg-accent-1/10 rounded-lg w-fit mb-4">
                            <svg className="w-8 h-8 text-accent-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-primary-text mb-2">To Watch</h3>
                        <p className="text-3xl font-bold text-accent-1">{toWatchCount}</p>
                    </div>
                </div>
            </div>

          
        </div>
    );
}

export default Home;