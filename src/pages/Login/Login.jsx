import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components'


const Log = styled.div`
    width: 20%;
    display: flex;
    padding: 2%;
    margin: 10% auto;
    background-color: #f1f1f1;

    & input {
        margin-bottom: 3%;
        width:100%
    }
    & button {
        display: flex;
        margin: auto;
    }
`;

function Login() {
    const history = useHistory();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem("user", JSON.stringify(userLogin));
        history.push("/pokemons");
    };

    return (
        <Log>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={userLogin.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={userLogin.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </div>
                <div style={{ textAlign: "center" }}>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </Log>
    );
}

export default Login;