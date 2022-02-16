import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        // preventDefault : デフォルトで用意されている動作を止める
        event.preventDefault();
        onSubmit(term);
    };

    return (
        <>
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text"
                        name="search"
                        placeholder=""
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                        // event.target.value : 入力された文字列 → 入力された値がtermStateで管理される
                    />
                </div>
            </form>
        </>
    );
};

export default SearchBar;