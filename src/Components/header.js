import React from 'react';
import logo from '../logo.png';

export default function Header() {
    return (
        <div className="w-screen h-24 bg-yellow-300">
            <span  >
                <img className="h-20 mt-4 ml-12 " src={logo}></img>
            </span>
        </div>
    )
}
