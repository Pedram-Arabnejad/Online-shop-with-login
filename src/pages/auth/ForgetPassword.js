import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "../../assets/Style/App.css";

const ForgetPassword = () => {
    const [values, setValue] = useState({ email: "" });

    const onChangeInput = (e) => {
        const { name, text } = e.target;
        console.log({ [e.target.name]: e.target.value }, "ppppp")
        setValue(pvalue => ({
            ...pvalue,
            [name]: text,
        }));
    };
    return (
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <form action="/login">
                <p>
                    <label>Email address</label><br />
                    <input
                        name="email"
                        value={values.email}
                        onChange={onChangeInput}
                    />
                </p>
                <p>
                    <button id="btn" type="submit">Send password reset email</button>
                </p>
                <p><Link to="/signin">Create an account</Link></p>
                <p><Link to="/">Back to Login</Link></p>
            </form>
        </div>
    )
}

export default ForgetPassword;