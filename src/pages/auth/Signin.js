import React, { useState } from 'react';
import "../../assets/Style/App.css";
import { Link } from 'react-router-dom';

const Signin = () => {

    const [values, setValue] = useState({ email: "", password: "" });

    const onChangeInput = (e) => {
        const { name, text } = e.target;
        setValue(pvalue => ({
            ...pvalue,
            [name]: text,
        }));

    };

    // const submit = (e) => {
    //     // localStorage.setItem([values], (values));
    //     // console.log(values,"sss")
    //     localStorage.setItem("name", JSON.stringify(values));
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(
    //       values.map((val) => {
    //         return { [val.name]: val.text };
    //       })
    //     );
    //   };


    function handleSubmit(e) {
        e.preventDefault()
        localStorage.setItem('items', JSON.stringify(values));
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