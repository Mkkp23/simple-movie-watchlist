import { useState } from "react";
import { Link } from "react-router-dom";
import { useMovies } from "../contexts/MoviesContext";
import FilterMovies from "../components/FilterMovies";
import ShowMovies from "../components/ShowMovies";

const ListMovies = () => {
    const { movies } = useMovies();
    const filters = ["Watched", "All", "To Watch"];
    const [activeFilter, setActiveFilter] = useState("All");

    const watchedCount = movies.filter(movie => movie.watchStatus).length;
    const toWatchCount = movies.filter(movie => !movie.watchStatus).length;

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-background/80 py-8">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-primary-text mb-2">
                            Movie Collection
                            <span className="block text-lg font-normal text-accent-1 mt-1">
                                {movies.length} movies in your watchlist
                            </span>
                        </h1>
                    </div>
                    <Link
                        to="/movie/add"
                        className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-accent-1 text-white font-semibold rounded-lg shadow-lg hover:bg-accent-1/90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        Add New Movie
                    </Link>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-background/50 backdrop-blur-sm border-2 border-accent-1/30 rounded-xl p-4 shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-primary-text/60 text-sm">Total Movies</p>
                                <p className="text-2xl font-bold text-primary-text">{movies.length}</p>
                            </div>
                            <div className="p-3 bg-accent-1/10 rounded-lg">
                                <svg className="w-6 h-6 text-accent-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-background/50 backdrop-blur-sm border-2 border-accent-1/30 rounded-xl p-4 shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-primary-text/60 text-sm">Watched</p>
                                <p className="text-2xl font-bold text-green-500">{watchedCount}</p>
                            </div>
                            <div className="p-3 bg-accent-1/10 rounded-lg">
                                <svg className="w-6 h-6 text-accent-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-background/50 backdrop-blur-sm border-2 border-accent-1/30 rounded-xl p-4 shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-primary-text/60 text-sm">To Watch</p>
                                <p className="text-2xl font-bold text-yellow-500">{toWatchCount}</p>
                            </div>
                            <div className="p-3 bg-accent-1/10 rounded-lg">
                                <svg className="w-6 h-6 text-accent-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter and Movie List */}
                <div className="bg-background/50 backdrop-blur-sm border-2 border-accent-1/30 rounded-xl shadow-lg overflow-hidden">
                    <FilterMovies filters={filters} active={activeFilter} activator={setActiveFilter} />
                    <div className="p-6">
                        <ShowMovies active={activeFilter} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListMovies;