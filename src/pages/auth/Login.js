import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/Style/App.css";


const Login = () => {

    const [values, setValue] = useState({ email: "", password: "" });

    const onChangeInput = (e) => {
        const { name, text } = e.target;
        // console.log({ [e.target.name]: e.target.value }, "ppppp")
        setValue(pvalue => ({
            ...pvalue,
            [name]: text,
        }));
    };

    return (
        <div className="text-center m-5-auto">
            <form>
                <h2>Login</h2>
                <br />
                <p>
                    <label>Email:</label><br />
                    <input
                        name="email"
                        value={values.email}
                        onChange={onChangeInput}
                    />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input
                        name="password"
                        value={values.password}
                        onChange={onChangeInput}
                    />
                </p>
                <p>
                    <button id="btn" type="submit">Login</button>
                </p>
                <p>
                    <Link to="/signin">Signin</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
