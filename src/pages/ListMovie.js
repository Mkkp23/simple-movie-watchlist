import { useState } from "react";
import FilterMovies from "../components/FilterMovies";
import ShowMovies from "../components/ShowMovies";

const ListMovies = () => {

    const filters = ["Watched", "All", "To Watch"]
    const [activeFilter, setActiveFilter] = useState("All")




    return (
        <div className="container mt-3 mx-auto p-4 rounded-lg border border-accent-1/30 bg-background shadow-lg">
            <FilterMovies filters={filters} active={activeFilter} activator={setActiveFilter} />

            <ShowMovies active={activeFilter} />
        </div>
    )
}

export default ListMovies;