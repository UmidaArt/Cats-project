import React, {useEffect, useState} from 'react';
import "./AllCats.css"
import axios from "axios";
import {useDispatch} from "react-redux";
import FavoriteBtn from "../../Components/FavoriteBtn";
import Spinner from "../../Components/Spinner";

const AllCats = () => {

    const dispatch = useDispatch()

    const [cats, setCats] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        axios(`https://api.thecatapi.com/v1/images/search?page=0&limit=20`)
            .then(({data}) => {
                setCats(data)
                setLoader(false)
            })

    },[])

    if (loader) {
        return <Spinner/>
    }


    const addFavorite = (cat) => {
        dispatch({type: 'ADD_TO_FAVORITES', payload: cat})
    }
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 p-14">
                {
                    cats.map(cat => (
                        <div key={cat.id} className="cat-card relative w-full h-48 rounded-lg flex flex-col justify-center items-center">
                            <img className="object-center object-cover w-full h-full"
                                 src={cat.url}
                                 alt="photo"/>
                            <FavoriteBtn onClick={() => addFavorite(cat)}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllCats;