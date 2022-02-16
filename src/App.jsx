import React, { useState } from 'react';
import axios  from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const App = () => {
    // const onSearchSubmit = (term) => {
    //     console.log(term);
    // };

    const [images, setImages] = useState([]);

    const onSearchSubmit = async(term) => {
        try{
            const params = {
                key: "25733271-08c1e7594eeaa881e2b4d1ea2",
                q: term,
            };
            const response = await axios.get("https://pixabay.com/api/", {params});
            setImages(response.data.hits);
            if(response.data.total === 0) {
                alert('お探しの画像はありません。')
            }
        } catch {
            alert('写真の取得に失敗しました。')
        }
    };

    return (
        <div className='ui container' style={{marginTop: '20px'}}>
            {/* onSearchSubmit関数をpropsとして渡す */}
            <SearchBar onSubmit={onSearchSubmit} />
            <ImageList images={images} />
        </div>
    );
};

export default App;