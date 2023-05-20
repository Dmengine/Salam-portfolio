import Link from 'next/link'
import React from 'react'

export default function Work() {
  return (
    <div className='bg-gray-100 sm:flex w-full sm:p-6 sm:pt-10 pl-3 pr-3 pt-14 sm:pl-10 sm:pr-10 h-screen'>
        <div className='bg-white pt-5 border shadow-sm w-full rounded-sm'>
            <div className=' justify-center items-center p-10'>
                <h1 className='text-2xl sm:text-5xl justify-center items-center font-bold text-indigo-700 pl-7 pb-4'>
                    I build & <br/> design stuff
                </h1>
                <p className='pt-3 text-xl justify-center items-center pl-7 text-indigo-950'>
                    Open source <br/>
                    projects, web apps <br/>
                    and experimentals.
                </p>
            </div>
            <div className='justify-center items-center p-10 sm:pl-16 w-full '>
                <Link 
                    href='#'
                    className='bg-white text-indigo-700 border border-indigo-500 hover:text-white pl-7 font-semibold rounded-sm items-center justify-center hover:bg-indigo-900 p-5 uppercase'
                    >
                    View my work
                    
                </Link>
            </div>
        </div>
        <div className='bg-white pt-5 border shadow-sm w-full rounded-sm'>
            <div className=' justify-center items-center p-10'>
                <h1 className='text-2xl sm:text-5xl justify-center items-center font-bold text-indigo-700 pl-7 pb-4'>
                    I write,<br/> sometimes
                </h1>
                <p className='pt-3 text-xl justify-center items-center pl-7 text-indigo-950'>
                    About designs, <br/>
                    fullstack dev <br/>
                    life experiences.
                </p>
            </div>
            <div className='justify-center items-center p-10 sm:pl-16 w-full '>
                <Link 
                    href='#'
                    className='bg-white text-indigo-700 border border-indigo-500 hover:text-white pl-7 font-semibold rounded-sm items-center justify-center hover:bg-indigo-900 p-5 uppercase'
                    >
                    Read my blog
                    
                </Link>
            </div>
        </div>
    </div>
  )
}