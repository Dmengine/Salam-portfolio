'use client'

import React from 'react'
import {useState} from 'react'
import {BsArrowRight} from 'react-icons/bs';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


export default function Contact() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const handleOnSubmit = (e) => {
    console.log("here")
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        e.target,
        process.env.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully',
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong',
            text: error.text,
          });
        }
      );
    e.target.reset();
    console.log('press')
  };
  

  const handleMessageSend = () => {
    console.log('Message:', message); //send message to owner
    setMessage('')
  }

  return (
    <div className='bg-gray-100 justify-center items-center flex flex-col h-screen'>
            <h1 className='items-center justify-center font-bold text-4xl text-indigo-700 mb-7 mt-5'>Send me a message!</h1>
            <p className='items-center justify-center text-lg text-indigo-900 mb-14'>
                Got a question or proposal, or just want <br/>
                to say hello? Go ahead.
            </p>
            <form onSubmit={handleOnSubmit} className='mb-5 items-center justify-center '>

              <div className='sm:flex justify-center items-center space-x-10'>
                  <input  
                    value={name} 
                    type="text" 
                    placeholder="Name" 
                    onChange={(e) => setName(e.target.value) }
                    required 
                    className='mb-5 ml-10 p-1' />
                  <input 
                    value={email} 
                    type="text" placeholder='Email' 
                    onChange={(e) => setEmail(e.target.value) }
                    required 
                    className='mb-5 ml-14' 
                    />
              </div>
              <input 
                value={message} 
                type="text" 
                placeholder='Message' 
                onChange={(e) => setMessage(e.target.value)}
                required
                className='block mb-7 p-7 ml-10' 
                />
              <button
                  className='bg-white text-indigo-700 flex text-xs border border-indigo-500 hover:text-white font-semibold rounded-sm ml-10 sm:ml-28 hover:bg-indigo-900 p-3 uppercase items-center justify-center'
                  type='submit'>
                  Shoot
                  <BsArrowRight className='items-center justify-center m-1 text-2xl'/>
              </button>
            </form>
    </div>
  )
}
