import React, {useEffect, useState} from 'react';
import "./AllCats.css"
import axios from "axios";
import {useDispatch} from "react-redux";
import Spinner from "../../Components/Spinner";
import CatCard from "../../Components/CatCard";

const AllCats = () => {

    const dispatch = useDispatch()
    const [cats, setCats] = useState([])
    const [page, setPage] = useState(0)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        axios(`https://api.thecatapi.com/v1/images/search?limit=15&page=${page + 1}&order=DESC`)
            .then(({data}) => {
                setCats(data)
                setLoader(false)
            })

    },[page])

    if (loader) {
        return <Spinner/>
    }

    const addFavorite = (cat) => {
        dispatch({type: 'ADD_TO_FAVORITES', payload: cat})
    }
    return (
        <div>
            <div className="pagination">
                {
                    Array(4).fill(0).map((buttonNam, idx) => (
                        <button className="paginationBtn" key={idx} onClick={() => setPage(idx)}>{idx + 1}</button>
                    ))
                }
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 p-14">
                {cats.map(cat => <CatCard cat={cat} action={addFavorite} key={cat.id}/>)}
            </div>
        </div>
    );
};

export default AllCats;