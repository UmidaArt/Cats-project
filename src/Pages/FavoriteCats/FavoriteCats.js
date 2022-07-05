import React from 'react';
import './FavoriteCats.css'
import {useDispatch, useSelector} from "react-redux";
import CatCard from "../../Components/CatCard";

const FavoriteCats = () => {

    const dispatch = useDispatch()
    const {favorites} = useSelector((store) => store)

    const removeFavorites = (cat) => {
        dispatch({type: 'REMOVE_TO_FAVORITES', payload: cat})
        console.log(favorites)
    }

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 p-14">
                {favorites.length ? favorites.map(cat => <CatCard cat={cat} action={removeFavorites} isFavorite/>) : 'Empty'}
            </div>
        </div>
    );
};

export default FavoriteCats;