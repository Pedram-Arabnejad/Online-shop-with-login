import React, { useState } from 'react';

const Cart = () => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart" || "[]")))

    function handledelet(id) {
        let newCart = cart.filter((e => e.id !== id))
        setCart(newCart)
        localStorage.setItem("cart",JSON.stringify(newCart))
    }
    return (
        <>
            <div className="text-center m-5-auto">
                <h1>Cart</h1>

                <div className="container">
                    <div className="row">

                        <div className="col-md-12 py-md-3 justify-content-center">
                            <div className="row">
                                {cart?.map((product) => {
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
                                                            <button className="btn btn-sm m-2 border-primary" onClick={() => handledelet(product.id)}>
                                                                <i className="fa fa-trash"></i>
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
                    </div>
                </div>
            </div>

        </>
    );
}

export default Cart;