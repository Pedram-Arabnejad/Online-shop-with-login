import React,{useEffect,useState} from 'react';
import "../../assets/Style/App.css";
import axios from 'axios';

const Home = () => {
    const [products,setProducts]=useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(({data})=>{
            console.log(data)
             setProducts(data)
        })
    }, [])
    
    return (
        <div className="text-center m-5-auto">
            <h1>Welcom!</h1>

           { products.map((data)=>{
            return(
                <div>
                <h5>
                    {`${data.id} - ${data.category}`}
                </h5>
                
            </div>
            )
           
           })}
        </div>
    );
}

export default Home;
