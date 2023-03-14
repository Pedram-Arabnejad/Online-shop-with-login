import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactLoading from "react-loading";


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get('https://fakestoreapi.com/products')
            .then(({ data }) => {
                // console.log(data)
                setData(data);
                setFilter(data)
                setLoading(false)
            })
    }, [])


    function handleCart(p) {
        // console.log(p, 'uuuu')
        let cart = JSON.parse(localStorage.getItem("cart") || "[]")
        cart.push(p)

        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const Loading = () => {
        return (
            <>
                <div className="col-md-3 my-3">

                    <div className="position-sticky" style={{ top: "100px" }}>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => setFilter(data)}>All</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("electronics")}>Electronics</button>
                    </div>

                </div>

                <div className="col-md-9 py-md-3">
                    <div className="row">
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <ReactLoading type="spinningBubbles" color="#0000FF"
                                height={200} width={50} />
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <ReactLoading type="spinningBubbles" color="#0000FF"
                                height={200} width={50} />
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <ReactLoading type="spinningBubbles" color="#0000FF"
                                height={200} width={50} />
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <ReactLoading type="spinningBubbles" color="#0000FF"
                                height={200} width={50} />
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <ReactLoading type="spinningBubbles" color="#0000FF"
                                height={200} width={50} />
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <ReactLoading type="spinningBubbles" color="#0000FF"
                                height={200} width={50} />
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <ReactLoading type="spinningBubbles" color="#0000FF"
                                height={200} width={50} />
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <ReactLoading type="spinningBubbles" color="#0000FF"
                                height={200} width={50} />
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <ReactLoading type="spinningBubbles" color="#0000FF"
                                height={200} width={50} />
                        </div>
                    </div>
                </div>

            </>
        )
    }


    const filterProduct = (category) => {
        const updateList = data.filter((x) => x.category === category);
        setFilter(updateList);
    }

    const ShowProducts = () => {
        return (
            <>
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
                                                <div className="d-flex flex-row-reverse">

                                                    {/* <NavLink className="stretched-link" to={`/product/${product.id}`}>
                                                            <button className="btn btn-sm m-2 border-primary">
                                                                <i className="fa fa-arrow-right text-muted"></i>
                                                            </button>
                                                        </NavLink> */}

                                                    <Link to={`/product/${product.id}`}>
                                                        <button className="btn btn-sm m-2 border-primary">
                                                            <i className="fa fa-arrow-right text-muted"></i>
                                                        </button>
                                                    </Link>

                                                    <button className="btn btn-sm m-2 border-primary" onClick={() => handleCart(product)}>
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </>

        );
    }
    return (
        <div className="container">
            <div className="row">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default Products;