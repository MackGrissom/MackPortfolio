import React from 'react';
import { Link } from 'react-router-dom';
// import woman image
import ManImg from '../assets/img/banner-man2.webp';
import BG from '../assets/tech.mp4'
const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden relative object-cover'
    >

      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Mack! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I'm A Full-Stack Web Developer.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              I build modern, fully-responsive Websites and Web apps.
            </p>
            <div className='flex'>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <a href='contact' class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Contact Me
                </a> </button>

                <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"><a href='projects'>See My Projects </a></button>
              
            </div>

          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full w-2 md:mb-[30%] sm:!mt-0 
          !ml-0 !mr-0 !mb-[200px]'>
            <img src={ManImg} alt='' className='avatar' />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;