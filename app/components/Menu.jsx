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
    <div className="relative z-10 lg:hidden">
        <div className="text-gray-200 justify-end p-10">
            <AiOutlineMenu onClick={toggleMenu}/>
        </div>
        {menu && (
            <div className="w-full lg:max-w-sm pr-3 absolute lg:hidden z-30">
                <ul className="w-full  text-gray-100 g-gradient-to-r from-blue-500 to-purple-600 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-900">
                    <li className="px-4 py-2 text-sm text-gray-300 hover:text-gray-700 hover:bg-gray-50 rounded-1-md">Projects</li>
                    <li className="px-4 py-2 text-sm text-gray-300 hover:text-gray-700 hover:bg-gray-50 rounded-1-md">Contact</li>
                </ul>
            </div>
        )}
    </div>
  );
}