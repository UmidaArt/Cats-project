import React from 'react';
import './FavoriteBtn.css'

const FavoriteBtn = ({onClick, isFavorite = false}) => {

    return (
        <>
            {
                isFavorite ? <div className='delete' onClick={onClick}> </div> : <div className='like-favorite' onClick={onClick}/>

            }
        </>
    );
};

export default FavoriteBtn;