'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Section2() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.6 },
    },
  };

  return (
    <div className='sm:flex bg-indigo-700'>
      <div>
        <motion.div
          ref={ref}
          className=''
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <h1 className='pb-1 justify-center items-center pl-10 pt-8 sm:pl-32 font-bold sm:text-6xl text-lime-500 text-4xl'>
            Over the <span className='sm:block'> years,</span>
          </h1>
          <div className='justify-center items-center p-10'>
            <motion.p className='p' variants={textVariants}>
              I've built products for companies and businesses
              <br />
              around the globe ranging from marketing websites to
              <br />
              complex solutions and enterprise apps with focus on
              <br />
              fast, elegant and accessible user experiences.
            </motion.p>
            <motion.p className='p' variants={textVariants}>
              Currently, I work at Shopify as a Senior Frontend
              <br />
              Engineer crafting thoughtful and inclusive
              <br />
              experiences that adhere to web standards for over 3
              <br />
              million merchants across the world.
            </motion.p>
            <motion.p className='p' variants={textVariants}>
              Before now, I was Principal Frontend Engineer at
              <br />
              hello tax, where I worked on a suite of tools and
              <br />
              services tailored towards automated VAT compliance
              <br />
              for multi-channel sellers in Europe.
            </motion.p>
            <motion.p className='p' variants={textVariants}>
              Prior to hello tax, I was Senior frontend engineering
              <br />
              consultant with Pixel2HTML, building JavaScript
              <br />
              applications and interfaces for orgs and individuals.
            </motion.p>
          </div>
        </motion.div>
      </div>
      <div>
        <motion.div
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={imageVariants}
        >
          <Image
            src='/undraw_cloud_hosting_7xb1.svg'
            width={500}
            height={200}
            alt='cloud hosting'
            className='justify-center items-center pt-10 p-5'
          />
        </motion.div>
      </div>
    </div>
  );
}
