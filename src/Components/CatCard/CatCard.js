import React from 'react';
import FavoriteBtn from "../FavoriteBtn";

const CatCard = ({cat, action, isFavorite}) => {
    return (
        <div key={cat.id} className="cat-card relative w-full h-48 rounded-lg flex flex-col justify-center items-center">
            <img className="object-center object-cover w-full h-full"
                 src={cat.url}
                 alt="photo"/>
            <FavoriteBtn onClick={() => action(cat)} isFavorite={isFavorite}/>
        </div>
    );
};

export default CatCard;