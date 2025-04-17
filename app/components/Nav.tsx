'use client'

import { motion } from 'motion/react';
import Image from 'next/image';
import { WavingText } from '../../components/WavingText';


export const Nav = () => {

  return (
    <motion.nav initial={{y: -100}} animate={{
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
      }} className=" px-4 md:px-6 xl:px-10 w-full h-20 shadow-sm">
      <div className="w-full h-full flex justify-between items-center">
        <div className='flex items-center gap-2 font-bold font-roboto-mono container'>
          <Image src={'/assets/logo.svg'} alt='' width={32} height={32} priority quality={75}/>
         <div className='mt-6 flex'>
          <WavingText text="SpeakSync_"
            delay={0.1}
            className='text-green-500 text-xl'/>
         <motion.span initial={{ opacity: 0, y: -50}} animate={{
          opacity: 1, y: 0,
          transition: {
            delay: 0.5,
            duration: 1,
            ease: 'easeInOut'
          }
          }} className='text-violet-500 text-xl'>AI</motion.span>
         </div>

        </div>
        <div className='w-full flex justify-end items-center gap-3 font-bold font-poppins'>
            <motion.button whileHover={{
              scale: 0.9,
              transition: {duration: 0.2, ease: 'easeInOut'}
              }} className='border rounded-md bg-green-500 text-white/95 px-5 py-2 cursor-pointer hover:brightness-110'>Sign In</motion.button>
            <motion.button whileHover={{
              scale: 0.9,
              transition: {duration: 0.2, ease: 'easeInOut'}
            }} className='border shadow-md rounded-md py-2 px-3 text-blue-950  cursor-pointer'>Register</motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
