import React from 'react'
import BannerPng from '../../assets/fruit-plate2.png'
import { motion } from 'framer-motion'
import { FadeLeft, FadeUp } from'/src/utility/animation'

const Banner2 = () => {
  return (
    <section className=''>
        <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24 " >
         
            {/* Banner Info */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                    <motion.h1
                     variants={FadeUp(0.5)}
                     initial='hidden'
                     whileInView='visible'
                     viewport={{once:true}}  
                    className='text-3xl lg:text-6xl font-bold uppercase'>
                        {" "}
                        On Line Fruit Store
                    </motion.h1>

                   
                    <motion.p
                    variants={FadeUp(.7)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}} 
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae incidunt accusantium quam alias minus voluptates error harum! Libero itaque nihil magni quam nobis. Fugiat ducimus doloribus id, quis voluptatem cumque.

                    </motion.p>
                    <motion.p
                    variants={FadeUp(0.7)}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}} 
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae incidunt accusantium quam alias minus voluptates error harum! Libero itaque nihil magni

                    </motion.p>
                    <motion.div
                    variants={FadeUp(1.1)}
                    initial='hidden'
                    animate='visible' 
                    className=' flex justify-center md:justify-start '>
                        <button className='primary-btn '>
                            Download the App                 
                        </button>
                    </motion.div>
                </div>
            </div>
            {/* Banner Image */}
            <div className='flex justify-center items-center'>
                <motion.img
                    initial={{opacity:0,x:200,rotate:75}}
                    animate={{opacity:1,x:0,rotate:0}}
                    transition={{duration:1,delay:0.3}} 
                    src={BannerPng} 
                    alt="fruit-plate" 
                    className='w-[400px] md:max-w-[500px] h-full object-cover drop-shadow '>
                </motion.img>
            </div>
           
        </div>
        
    </section>
  )
}

export default Banner2