import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import './Spinner.css'

const Spinner = () => {
    return (
        <div className="spinner">
            <FadeLoader color={'#0860E5FF'} size={50} />
        </div>
    );
}

export default Spinner;