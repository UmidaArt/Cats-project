import React from 'react';
import './FavoriteCats.css'
import {useDispatch, useSelector} from "react-redux";
import FavoriteBtn from "../../Components/FavoriteBtn";

const FavoriteCats = () => {

    const dispatch = useDispatch()
    const {favorites} = useSelector((store) => store)

    const removeFavorites = (id) => {
        dispatch({type: 'REMOVE_TO_FAVORITES', payload: id})
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 p-14">
                {
                    favorites.length ? favorites.map(cat => (
                        <div key={cat.id} className="cat-card relative w-full h-48 rounded-lg flex flex-col justify-center items-center">
                            <img className="object-center object-cover w-full h-full"
                                 src={cat.url}
                                 alt="photo"/>
                            <FavoriteBtn onClick={() => removeFavorites(cat.id)}/>
                        </div>
                    )): 'Empty'
                }
            </div>
        </div>
    );
};

export default FavoriteCats;