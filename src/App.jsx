import React, { useState } from 'react';
import axios  from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import logo from './logo.png';

const App = () => {

    const [images, setImages] = useState([]);
    
    // 環境変数の導入 .env.local GithubにAPIキーを載せることを防ぐ
    const ApiKey = process.env.REACT_APP_PIXABAY_APIKEY;

    const onSearchSubmit = async(term) => {
        try{
            const params = {
                key: ApiKey,
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
            <img src={logo} alt='pixabay-logo' className='pixabay-logo' />
            {/* onSearchSubmit関数をpropsとして渡す */}
            <SearchBar onSubmit={onSearchSubmit} />
            <ImageList images={images} />
        </div>
    );
};

export default App;