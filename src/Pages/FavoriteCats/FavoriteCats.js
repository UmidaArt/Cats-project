import React from 'react';
import './FavoriteCats.css'
import {useDispatch, useSelector} from "react-redux";

const FavoriteCats = () => {

    const {favorites} = useSelector((store) => store)

    const dispatch = useDispatch()

    const removeFavorites = (id) => {
        dispatch({type: 'REMOVE_TO_FAVORITES', payload: id})
    }


    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 p-14">
                {
                    favorites.map(cat => (
                        <div key={cat.id} className="cat-card relative w-full h-48 rounded-lg flex flex-col justify-center items-center">
                            <img className="object-center object-cover w-full h-full"
                                 src={cat.url}
                                 alt="photo"/>
                            <div onClick={() => removeFavorites(cat.id)}> </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FavoriteCats;