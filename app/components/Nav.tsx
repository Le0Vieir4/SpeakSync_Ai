'use client'

import WavingText from '@/components/WavingText';
import { motion } from 'motion/react';
import Image from 'next/image';


export const Nav = () => {

  return (
    <motion.nav initial={{y: -100}} animate={{
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
      }} className="px-2 sm:px-6 xl:px-10 w-full h-20 shadow-sm">
      <div className="w-full h-full flex justify-between items-center">
        <div className='flex items-center font-bold font-roboto-mono container'>
          <Image className='w-[24px] h-[24px]'  src={'/assets/logo.svg'} alt='' width={32} height={32} priority quality={75}/>
         <div className='mt-6 flex'>
          <WavingText text="SpeakSync_"
            delay={0.1}
            duration={0.2}
            className='text-green-500 text-md sm:text-xl lg:text-2xl'/>
         <motion.span initial={{ opacity: 0, y: -50}} animate={{
          opacity: 1, y: 0,
          transition: {
            delay: 0.6,
            duration: 1,
            ease: 'easeInOut'
          }
          }} className='text-violet-500 text-md sm:text-xl lg:text-2xl'>AI</motion.span>
         </div>

        </div>
        <div className='w-full flex justify-end items-center gap-1 lg:gap-3 font-bold font-poppins'>
            <motion.button whileHover={{
              scale: 0.9,
              transition: {duration: 0.2, ease: 'easeInOut'}
              }} className='border rounded-md bg-green-500 text-white/95 px-2 py-2 sm:px-5 sm:py-2 lg:px-8 lg:py-3 cursor-pointer hover:brightness-110'>Sign In</motion.button>
            <motion.button whileHover={{
              scale: 0.9,
              transition: {duration: 0.2, ease: 'easeInOut'}
            }} className='border shadow-md rounded-md py-2 px-3 lg:px-4 text-blue-950  cursor-pointer'>Register</motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
