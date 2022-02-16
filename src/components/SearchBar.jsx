import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    // onSubmit（onSearchSubmit関数）をpropsとして受け取る
    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        // preventDefault : デフォルトで用意されている動作を止める
        event.preventDefault();
        onSubmit(term); // App.jsに表示したい=term=入力された値をonSubmitの引数に渡す
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
                        // onChange : inputの内容が変わった時に関数発火
                        // event.target.value＝inputに入力された文字列 → 入力された値がsetTerm()で管理される
                    />
                </div>
            </form>
        </>
    );
};

export default SearchBar;