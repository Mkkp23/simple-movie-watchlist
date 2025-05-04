import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ pages }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="container mt-3 mx-auto p-4 rounded-lg border border-accent-1/30 bg-background shadow-lg">
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-between items-center">
                <div className="text-accent-1 font-bold text-xl px-4 select-none">
                    <Link to="/" className="flex items-center hover:text-accent-1/80 transition-colors duration-200">
                        <span className="text-2xl mr-2">🎬</span>
                        <span className="bg-gradient-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                            MovieWatchList
                        </span>
                    </Link>
                </div>

                <ul className="flex space-x-8">
                    {pages.map((page, index) => {
                        const isActive = location.pathname === page.path;

                        return (
                            <li key={index} className="relative">
                                <Link
                                    className={`px-4 py-2 rounded-md transition-all duration-200 font-medium
                                    ${isActive
                                            ? 'bg-accent-1/20 text-accent-1'
                                            : 'text-primary-text hover:bg-accent-1/10 hover:text-accent-1'
                                        }`}
                                    to={page.path}
                                >
                                    {page.name}
                                </Link>
                                {isActive && (
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-accent-1 rounded-full" />
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                <div className="flex justify-between items-center">
                    <div className="text-accent-1 font-bold text-xl select-none">
                        <Link to="/" className="flex items-center">
                            <span className="text-2xl mr-1">🎬</span>
                            <span className="bg-gradient-to-r from-accent-1 to-accent-2 bg-clip-text text-transparent">
                                Movies
                            </span>
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-primary-text p-2 rounded-md hover:bg-accent-1/10 focus:outline-none transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-primary-text rounded-full transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-primary-text rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`w-full h-0.5 bg-primary-text rounded-full transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                <div className={`mt-1 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="space-y-2 pt-1 border-t border-accent-1/10">
                        {pages.map((page, index) => {
                            const isActive = location.pathname === page.path;

                            return (
                                <li key={index}>
                                    <Link
                                        className={`block px-4 py-3 rounded-md transition-all duration-200 font-medium
                                        ${isActive
                                                ? 'bg-accent-1/10 text-accent-1 border-l-2 border-accent-1'
                                                : 'text-primary-text hover:bg-accent-1/5 hover:text-accent-1'
                                            }`}
                                        to={page.path}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {page.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;