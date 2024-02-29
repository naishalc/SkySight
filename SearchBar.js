import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        props.onSearch(searchValue);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Enter city name"
                className="TextInput"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <button type="submit">Get Forecast</button>
        </form>
    );
};

export default SearchBar;