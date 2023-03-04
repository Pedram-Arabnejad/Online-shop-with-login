import React, { useState } from 'react';
import "../../assets/Style/App.css";

const Signin = () => {

    const [values, setValue] = useState({ email: "", password: "" });

    const onChangeInput = (e) => {
        const { name, text } = e.target;
        setValue(pvalue => ({
            ...pvalue,
            [name]: text,
        }));

    };

    const submit = (e) => {
        // localStorage.setItem([values], (values));
        // console.log(values,"sss")
        localStorage.setItem("name", JSON.stringify(values));
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(
    //       values.map((val) => {
    //         return { [val.name]: val.text };
    //       })
    //     );
    //   };


    return (
        <div className="text-center m-5-auto">
            <form onSubmit={submit}>
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
                    <button id="btn" type="submit" onClick={submit}>Register</button>
                </p>
            </form>
        </div>
    );
}

export default Signin;