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
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Mack Grissom
              </h2>
              <p className='mb-4 text-accent'>
                Freelance Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                I'm an ambitious 27 year old full stack developer & designer eager to build modern <strong> solutions</strong> for your business. As a recent graduate from one of the most decorated full stack programming bootcamps, Le Wagon, I am fully equipped to build modern products.
              </p>
              <br />
              <p className='mb-8'> Previously a UX researcher speaking directly to end users, I helped turn our research into tangible product improvements, or even brand new go-to-market products. I know first-hand the importance of customer development and building better products based off user feedback, all the while maintaining modern design principles. 
              </p>
              <p className='mb-8'>
              I utilize the most modern technologies and frameworks to ensure your website is not only visually appealing but functionally flawless across all devices.
            </p>

            <p className='mb-8'> In my freetime I enjoy travelling, hiking, surfing, learning new languages, playing guitar, reading, photography and as nerdy as it sounds, programming! </p>
          </div>

          {/* <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me  
           </button> */}
          <a href='https://app.enhancv.com/share/7cdac89a/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic' className='resume'> My Resume</a>

        </div>
      </div>
    </div>
    </section >
  );
};

export default About;