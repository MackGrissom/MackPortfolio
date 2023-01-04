import React from 'react';
import link from 'react';
import { contact } from '../data';
// import img
import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[500px]  md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Mack Grissom
              </h2>
              <p className='mb-4 text-accent'>
                Full-Stack Software Engineer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                I'm an ambitious full-stack, object oriented, software engineer. I'm eager to build modern <strong> solutions</strong> for your business. As a recent graduate from one of the most decorated full-stack programming bootcamps, Le Wagon, I am fully equipped to build modern & fully responsive products.
              </p>
             
            <p className='mb-8'> I'm open to freelance projects & remote fulltime positions. Please see my resume below & continue down my portfolio to see my tech stack & recent projects. </p>
          </div>

          {/* <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me  
           </button> */}
           
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <a href='https://app.enhancv.com/share/7cdac89a/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic' class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  My Resume
                </a> </button>
        </div>
      </div>
    </div>
    </section >
  );
};

export default About;