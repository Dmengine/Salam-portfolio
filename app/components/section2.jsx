import Image from 'next/image'
import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Menu from './Menu'

export default function Section2() {
  return (
    <div className='flex transition duration-75'>
      <div className=' w-2/3 h-screen bg-gray-900 relative items-center justify-center'>
        <header className='pb-6 bg-gray-900'>
          <h2 className='font-bold text-2xl p-14 py-8 text-lime-500'> Salam </h2>
        </header>
        <div className='justify-center items-center bg-gray-900 '>
          <h1 className='py-4 justify-center items-center pl-32 font-bold sm:text-6xl text-lime-500'>Fullstack <br/> Developer.</h1>
          <p className='justify-center item content-center text-sm sm:text-lg pt-2 pl-32 text-gray-300'>I like to craft solid and scalable frontend <br/> products with great user experiences..</p>
          <div className='flex'>
            <ul className='pt-5 text-gray-300 items-center flex justify-between pl-28'>
              <li className='p-10 text-sm'>Highly skilled at progressive <br/> enhancement, design <br/> systems & UI Engineering.</li>
              <li className='text-sm '>Proven experience building <br/> successful products for <br/> clients across several <br/> countries.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=' bg-lime-200 w-1/3 flex relative h-screen'>
      <Image
        width={500} 
        height={500}
        className=' justify-center items-center'
      />
      <Menu className='pt-14'/>
      </div>
    </div>  
    
  )
}
