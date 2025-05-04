
const FilterMovies = ({ filters, active, activator }) => {

    return (
        <ul className="flex flex-row justify-evenly items-center">
            {
                filters.map(
                    (filter, index) => {
                        return (
                            <li key={index} className={`px-4 py-2 rounded-md text-primary-text hover:cursor-pointer font-medium
                              transition-all duration-200 
                            ${active === filter
                                    ? 'bg-accent-2/20 text-accent-2 border-b-2'
                                    : 'hover:bg-accent-2/10 hover:text-accent-2'
                                }`}
                                onClick={(e) => { activator(filter) }}
                            >
                                {filter}
                            </li>
                        )
                    }
                )
            }
        </ul>
    )
}

export default FilterMovies;