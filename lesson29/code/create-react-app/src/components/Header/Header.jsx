import React from "react";
import './Header.css';

export class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div>My logo</div>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><button disabled>Click me</button></li>
                </ul>
            </header>
        )
    }
}