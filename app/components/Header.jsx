'use client'

import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import Menu from './Menu';

export default function Header() {
  const headerVariants = {
    initial: { opacity: 1, y: -30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className='flex items-center bg-gradient-to-r from-blue-500 to-purple-600 justify-between'>
      <motion.h2
        className='font-bold text-2xl p-14 py-8 text-lime-500'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Salam
      </motion.h2>
      <div className='hidden lg:flex justify-evenly items-center text-2xl'>
        <motion.h2
          className='font-bold text-2xl p-14 py-8 text-lime-500'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Projects
        </motion.h2>
        <motion.h1
          className='font-bold text-2xl p-14 py-8 text-lime-500'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact
        </motion.h1>
      </div>
      <Menu />
    </motion.div>
  );
}
