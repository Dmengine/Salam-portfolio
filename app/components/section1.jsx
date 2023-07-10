'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Section1() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };

  return (
    <div className='sm:flex bg-gradient-to-r from-blue-500 to-purple-600'>
      <motion.div
        className='relative flex-1 bg-gradient-to-r from-blue-500 to-purple-600'
        ref={ref}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div className='justify-center items-center'>
          <motion.h1
            className='p-10 justify-center items-center font-bold text-4xl sm:text-6xl text-lime-500'
            variants={textVariants}
          >
            Fullstack <br /> Developer.
          </motion.h1>
          <motion.p
            className='text-lg text-gray-300 p-10 pt-2'
            variants={textVariants}
          >
            I like to craft solid and scalable frontend products with great user experiences
          </motion.p>
          <motion.div
            className='flex justify-center items-center space-x-3 p-10 sm:p-4'
            variants={textVariants}
          >
            <motion.p className='text-gray-300 p-4 sm:p-2'>
              Highly skilled at progressive{' '}
              <span className='block'>enhancement, design systems & UI Engineering.</span>
            </motion.p>
            <motion.p className='text-gray-300 p-4'>
              Proven experience building successful{' '}
              <span className='sm:block'> products for clients across several countries.</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className='bg-gradient-to-r from-purple-600 to-blue-500 p-5'>
        <motion.div
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={imageVariants}
        >
          <Image
            src='/undraw_cloud_hosting_7xb1.svg'
            width={500}
            height={500}
            alt='cloud hosting'
            className='justify-center items-center'
          />
        </motion.div>
      </div>
    </div>
  );
}

