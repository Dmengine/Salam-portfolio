'use client'

import React, { useState } from 'react';
import { useRef } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import emailjs from 'emailjs-com';

export default function Contact() {

  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fdea5j8', 'template_5anpfhj', form.current, 'Y2xSnP44n4zEJZfgl')
      .then(
        (result) => {
          console.log(result.text);
          // Reset the form fields to empty
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='bg-gray-100 justify-center items-center flex flex-col h-screen'>
      <h1 className='items-center justify-center font-bold text-4xl text-indigo-700 mb-7 mt-5'>
        Send me a message!
      </h1>
      <p className='items-center justify-center text-lg text-indigo-900 mb-14'>
        Got a question or proposal, or just want <br />
        to say hello? Go ahead.
      </p>

      <form ref={form} onSubmit={sendEmail} className='mb-5 items-center justify-center '>
        <div className='sm:flex justify-center items-center space-x-10'>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='mb-5 ml-10 p-1'
          />
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='mb-5 ml-14'
          />
        </div>
        <input
          type='text'
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className='block mb-7 p-7 ml-10'
        />
        <button
          className='bg-white text-indigo-700 flex text-xs border border-indigo-500 hover:text-white font-semibold rounded-sm ml-10 sm:ml-28 hover:bg-indigo-900 p-3 uppercase items-center justify-center'
          type='submit'
        >
          Shoot
          <BsArrowRight className='items-center justify-center m-1 text-2xl' />
        </button>
      </form>
    </div>
  );
}
