import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../assets/Style/App.css";


const Login = () => {

    const [values, setValue] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        // console.log({ [e.target.name]: e.target.value }, "ppppp")
        setValue(pvalue => ({
            ...pvalue,
            [name]: value,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault()
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if (
            values.email === loggeduser.email &&
            values.password === loggeduser.password
        ) {
            localStorage.setItem("loggedin",true);
            navigate("/home");
        }
        else{
            alert("Wrong Emaill & Password")
        }
    };

    return (
        <div className="text-center m-5-auto">
            <form onSubmit={handleLogin}>
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
                <p><Link to="/signin">Signin</Link></p>
                <p><Link to="/ForgetPassword">ForgetPassword</Link></p>
            </form>
        </div>
    );
}

export default Login;
