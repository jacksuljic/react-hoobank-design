import React from 'react';
import {useState} from "react";

import { close, logo, menu } from "../assets";
import { navLinks} from "../constants";

const Navbar = () => {

    const [ toggle, setToggle ] = useState(false);
    return (
        <nav className={'w-full flex py-6 justify-between items-center navbar'}>
            <img src={logo} alt="logo" className={'w-[124px] h-[32px]'}/>
            <ul className={'list-none sm:flex hidden justify-end items-center flex-1'}>
                {navLinks.map ( ( link, index ) => (
                    <li key={link.id}
                        className={'font-poppins font-normal cursor-pointer text-[16px] text-white ' +
                        ( index === navLinks.length-1 ? 'mr-0' : 'mr-10' )}
                    >
                        <a href={`#${link.id}`}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className={'sm:hidden flex flex-1 justify-end items-center'}>
                <img src={ toggle ? close : menu}
                     alt="menu"
                     className={'w-[28px] h-[28px] object-contain cursor-pointer z-10'}
                    onClick={() => setToggle( (prev) => !prev )}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient p-6 absolute top-0 left-0 w-full h-full sidebar`}>
                    <ul className={'list-none flex justify-center flex-col items-center flex-1'}>
                        {navLinks.map ( ( link, index ) => (
                            <li key={link.id}
                                className={'font-poppins font-normal cursor-pointer text-[16px] text-white ' +
                                    ( index === navLinks.length-1 ? 'mb-0' : 'mb-4' )}
                            >
                                <a href={`${link.id}`}>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;