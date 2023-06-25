import React,{lazy} from 'react'
import Menu from './Menu'

export default function Header() {
  return (
    <div className='flex justify-between items-center bg-gray-900'>
         <h2 className='font-bold text-2xl p-14 py-8 text-lime-500'> Salam </h2>
         <Menu/>
    </div>
  )
}
