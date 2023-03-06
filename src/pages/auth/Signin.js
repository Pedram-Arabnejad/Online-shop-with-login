import React, { useState } from 'react';
import "../../assets/Style/App.css";
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {

    const [values, setValue] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setValue(pvalue => ({
            ...pvalue,
            [name]: value,
        }));

    };


    function handleSubmit(e) {
        e.preventDefault()
        localStorage.setItem("user", JSON.stringify(values));
        // navigate("/");

        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if (
            values.email === loggeduser.email &&
            values.password === loggeduser.password
        ) {
            alert("Emaill & Password is available!!!")
        }
        else{
            navigate("/");
        }
    };


    return (
        <div className="text-center m-5-auto">
            <form onSubmit={handleSubmit}>
                <h2>Signin</h2>
                <p>
                    <label>Email address:</label><br />
                    <input
                        name="email"
                        value={values.email}
                        // type="email"
                        onChange={onChangeInput}
                    />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input
                        name="password"
                        value={values.password}
                        // type="password"
                        onChange={onChangeInput}
                    />
                </p>
                <p>
                    <button id="btn" type="submit">Register</button>
                </p>
                <p><Link to="/">Back to Login</Link></p>
            </form>
        </div>
    );
}

export default Signin;