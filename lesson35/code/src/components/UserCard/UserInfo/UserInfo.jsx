import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Button} from "../../UI";

export function UserInfo({user: { name, year }}) {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Year: {year}</p>
            <Button onClick={() => {
                navigate("/")
            }}>Go back</Button>
        </div>
    )
}