import Image from 'next/image'
import React from 'react'


export default function Section1() {
  return (
    <div className='sm:flex bg-gray-900 '>
      <div className='relative'>
        <div className='justify-center items-center'>
          <h1 className='p-10 justify-center items-center  font-bold text-4xl sm:text-6xl text-lime-500'>Fullstack <br/> Developer.</h1>
          <p className=' text-lg text-gray-300 p-10 pt-2'>I like to craft solid and scalable frontend products with great user experiences</p>
          <div className='flex justify-center items-center space-x-3 p-10 sm:p-4'>
            <p className='text-gray-300 p-4 sm:p-2'>
              Highly skilled at progressive <span className='block'>enhancement, design systems &  UI Engineering.</span>
            </p>
            <p className='text-gray-300 p-4'>
              Proven experience building successful <span className='sm:block'> products for clients across several countries.</span>
            </p>
          </div>
        </div>
      </div>
      <div className='bg-gray-900 p-5'>
        <Image
        src='undraw_cloud_hosting_7xb1.svg'
        width={500} 
        height={500}
        className=' justify-center items-center'
        />
      </div>
    </div>
  )
}
