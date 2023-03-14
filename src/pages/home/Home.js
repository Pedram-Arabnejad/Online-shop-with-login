import React,{useEffect,useState} from 'react';
import "../../assets/Style/App.css";
import Products from './../../layout/main/Products';


const Home = () => {
    return (
        <div className="text-center m-5-auto">
            <h1>Welcom!</h1>
            <Products />
        </div>
    );
}

export default Home;
