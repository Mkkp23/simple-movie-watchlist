import { createContext, useContext, useState } from "react";

const MoviesContext = createContext()

export const MovieProvider = ({ children }) => {

    const [movies, setMovies] = useState([])

    return (
        <MoviesContext.Provider value={{ movies, setMovies }}>
            {children}
        </MoviesContext.Provider>
    )
}

export const useMovies = () => useContext(MoviesContext);