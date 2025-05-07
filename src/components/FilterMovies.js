const FilterMovies = ({ filters, active, activator }) => {
    return (
        <div className="bg-background/80 backdrop-blur-sm border-b-2 border-accent-1/30">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex space-x-1">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => activator(filter)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2
                                ${active === filter 
                                    ? 'bg-accent-1 text-white shadow-lg shadow-accent-1/20' 
                                    : 'text-primary-text/60 hover:text-primary-text hover:bg-background/50'
                                }`}
                        >
                            {filter === "Watched" && (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )}
                            {filter === "All" && (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                            {filter === "To Watch" && (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )}
                            <span>{filter}</span>
                        </button>
                    ))}
                </div>
                <div className="text-sm text-primary-text/40">
                    {active === "All" && "Showing all movies"}
                    {active === "Watched" && "Showing watched movies"}
                    {active === "To Watch" && "Showing movies to watch"}
                </div>
            </div>
        </div>
    );
}

export default FilterMovies;