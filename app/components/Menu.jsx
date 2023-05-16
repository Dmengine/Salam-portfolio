"use client"


import { useState } from "react"
import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

export default function Menu() {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    };
  return (
    <div>
        <AiOutlineMenu onClick={toggleMenu} />
        {menu && (
            <div>
                <ul>
                    <li className="">Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        )}
    </div>
  );
}