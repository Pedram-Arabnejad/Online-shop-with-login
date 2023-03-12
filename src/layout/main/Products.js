import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(({ data }) => {
                // console.log(data)
                setData(data);
                setFilter(data)
            })
    }, [])

    const filterProduct = (category) => {
        const updateList = data.filter((x) => x.category === category);
        setFilter(updateList);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 my-3">

                        <div className="position-sticky" style={{ top: "100px" }}>
                            <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => setFilter(data)}>All</button>
                            <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                            <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                            <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                            <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("electronics")}>Electronics</button>
                        </div>

                    </div>

                    <div className="col-md-9 py-md-3 justify-content-center">
                        <div className="row">
                            {filter.map((product) => {
                                return (
                                    <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.id}>

                                        <div className="card h-100">
                                            <img src={product.image} className="m-3"
                                                style={{ height: "300px", width: "auto", objectFit: "contain" }}
                                                alt={product.title} />
                                            <div className="m-3 mb-0">
                                                <small className="card-title">{product.title.substring(0, 50)}...</small>
                                            </div>
                                            <div style={{ marginTop: "auto" }}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="m-3"><b>${product.price}</b></div>
                                                    <NavLink className="stretched-link" to={`/product/${product.id}`}>
                                                        <button className="btn btn-sm m-3 border-primary">
                                                            <i className="fa fa-arrow-right text-muted"></i>
                                                        </button>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

export default Products;