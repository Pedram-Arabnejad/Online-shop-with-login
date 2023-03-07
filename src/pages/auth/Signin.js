import React, { useState } from 'react';
import "../../assets/Style/App.css";

const Signin = () => {

    const [values, setValue] = useState({ email: "", password: "" });

    const onChangeInput = (name,e) => {

        console.log([name],e.target.value,'eeee')
        // const { name, text } = e.target;
        setValue(pvalue => ({
            ...pvalue,
            [name]: e.target.value,
        }));

    };

    const submit = () => {

        let users = JSON.parse(localStorage.getItem("users") || "[]")
        users.push(values)


        localStorage.setItem('users', JSON.stringify(users))
        
    //   localStorage.setItem('user', values);
        // console.log(values,"sss")
        // localStorage.setItem("name", JSON.stringify(values));
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
                {console.log(values.email)}
                <h2>Signin</h2>
                <p>
                    <label>Email address:</label><br />
                    <input
                        name="email"
                        value={values.email}
                        // type="email"
                        onChange={(e)=>onChangeInput('email',e)}
                    />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input
                        name="password"
                        value={values.password}
                        // type="password"
                        onChange={(e)=>onChangeInput('password',e)}
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