import React from 'react';

const Filter = ({filterResults, setFilter}) => {
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            filter shown with 
            <input onChange={handleFilterChange} value={filterResults} />
        </div>
    )
}

export default Filter;