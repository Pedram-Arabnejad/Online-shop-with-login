import React from 'react'
import { NavLink} from 'react-router-dom';
import { } from "../../assets/Images/FakeShop.png"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-light fixed-top shadow">
                <div className="container-fluid container">

                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <i className="fa fa-bars"></i>
                    </button> */}

                    <div>
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                        <NavLink
                            to="/login"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            {" "}
                            Login{" "}
                        </NavLink>{" "}
                        /
                        <NavLink
                            to="/signin"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            {" "}
                            Signin{" "}
                        </NavLink>
                    </div>

                    {/* <div>
                        <button
                            title="Button"
                            onPress={() => navigation.navigate("screenRouteName", { params })}
                        />
                    </div> */}

                    <NavLink
                        to="/home"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        {/* <img src="../../assets/Images/FakeShop.png" alt="logo" style={{ height: "50px" }} /> */}
                        <span>FakeShop</span>
                    </NavLink>

                    <NavLink
                        to="/Cart"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                       <span><i className="fa fa-shopping-cart"></i></span>
                    </NavLink>

                    {/* <button className="navbar-toggler" type="button">
                        <i className="fa fa-shopping-cart"></i>
                    </button> */}

                </div>
            </nav>
        </div>
    )
}

export default Navbar;