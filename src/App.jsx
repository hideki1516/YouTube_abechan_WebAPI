import React from 'react';
import SearchBar from './components/SearchBar';

const App = () => {
    const onSearchSubmit = (term) => {
        console.log(term);
    };

    return (
        <div className='ui container' style={{marginTop: '20px'}}>
            {/* onSearchSubmit関数をpropsとして渡す */}
            <SearchBar onSubmit={onSearchSubmit} />
        </div>
    );
};

export default App;