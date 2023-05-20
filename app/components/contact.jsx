'use client'

import React from 'react'
import {useState} from 'react'

export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className='bg-gray-100 justify-center items-center flex flex-col'>
            <h1 className='items-center justify-center font-bold text-4xl text-indigo-700 mb-7'>Send me a message!</h1>
            <p className='items-center justify-center text-lg text-indigo-900 mb-14'>
                Got a question or proposal, or just want <br/>
                to say hello? Go ahead.
            </p>
            <form className='mb-5'>
                <div className='sm:flex justify-center items-center space-x-10'>
                    <input  value={name} type="text" placeholder="Name" onChange={(e) => setName(e.target.value) } className='mb-5 border-b-indigo-800' />
                    <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.email) } className='mb-5' />
                </div>
                <input type="text" placeholder='Message' onChange={(e) => setMessage(e.target.message)} />
            </form>
            <button
                    className='bg-white text-indigo-700 border border-indigo-500 hover:text-white pl-7 font-semibold rounded-sm items-center justify-center hover:bg-indigo-900 p-5 uppercase'
                    type='submit'>
                    Shoot
            </button>
    </div>
  )
}
