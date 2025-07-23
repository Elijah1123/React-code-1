import react from 'react';

const SearchBar = ({ search, setSearch}) => {
    return ( 
        <input
            type="text"
            placeholder='Search expenses...'
            value={search}
            onChange={(e) => setSearch(e.target.value) }
            className='border p-2 w-full mb-4 rounded'
        />
    );
};

export default SearchBar;