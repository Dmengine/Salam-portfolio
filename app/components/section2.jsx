import Image from 'next/image'
import React from 'react'

export default function Section2() {
  return (
    <div className='sm:flex bg-indigo-700'>
        <div className=''>
            <h1 className='pb-1 justify-center items-center pl-10 pt-8 sm:pl-32 font-bold sm:text-6xl text-lime-500  text-4xl'>
                Over the <span className='sm:block'> years,</span>
            </h1>
            <div className='justify-center items-center p-10'>
            <p className='p'>
                I've built products for companies and businesses <br/> 
                around the globe ranging from marketing websites to <br/> 
                complex solutions and enterprise apps with focus on <br/>
                fast, elegant and accessible user experiences.
            </p>
            <p className='p'>
                Currently, I work at Shopify as a Senior Frontend <br/> 
                Engineer crafting thoughtful and inclusive <br/> 
                experiences that adhere to web standards for over 3 <br/> 
                million merchants across the world.
            </p>
            <p className='p'>
                Before now, I was Principal Frontend Engineer at <br/>
                hello tax, where I worked on a suite of tools and <br/>
                services tailored towards automated VAT compliance <br/>
                for multi-channel sellers in Europe.
            </p>
            <p className='p'>
                Prior to hello tax, I was Senior frontend engineering <br/>
                consultant with Pixel2HTML, building JavaScript <br/>
                applications and interfaces for orgs and individuals.
            </p>
            </div>
        </div>
        <div>
            <Image 
                src='undraw_cloud_hosting_7xb1.svg'
                width={500}
                height={200}
                className='justify-center items-center pt-10 p-5'
                />
        </div>
    </div>
  )
}