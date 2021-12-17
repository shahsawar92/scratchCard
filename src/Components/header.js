import React from 'react';
import logo from '../logo.png';
import Index from './hero';

export default function Header() {
    return (
        <>
        {/* navbar  */}
        {/* <div className="w-screen h-22 bg-gray-800">
            <span  >
                <img className="h-20 mt-4 ml-12 " src={logo}></img>
            </span>
        </div> */}
        {/* hero section in header */}
        <Index />
        {/* <div className="w-screen h-80  text-center pt-10">
            <h2 className="font-bold text-5xl text-white">Welcome to PINFT</h2>
            <p className="font-medium text-xl py-5">here you will have very fun by scratching cards and winning differnt prices</p>
        </div> */}
        </>
    )
}
