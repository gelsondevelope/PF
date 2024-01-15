'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ContainerImage } from './Container';
import { Children, ReactNode } from 'react';



export default function MainContainer({children1, children2}:{
    children1:ReactNode,children2:ReactNode
}) {
  const [ref, inView] = useInView({});

  return (
    <ContainerImage>


  
      <motion.div 
        ref={ref}
        className="hidden lg:h-[666px] xl:h[700px] md:h-[555px] w-[565px] items-center md:flex"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children1}
      
      </motion.div>
      <div className="flex flex-col items-center justify-center space-y-4 py-20 md:-mt-2 md:items-start md:space-y-6 md:py-0">
        <div ref={ref} className=''>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-4 md:space-y-6'
          >
            {children2}
           
          </motion.div>
        </div>
      </div>
      
   
      </ContainerImage>
  )
}
