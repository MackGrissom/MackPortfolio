import React from 'react';
import { Link } from 'react-router-dom';
// import woman image
import ManImg from '../assets/img/banner-man2.webp';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Mack! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              A Full-Stack Software Engineer.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              I leverage modern technology to build business solutions. Let's connect.
            </p>
           
            {/* <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
            <Link
                to="Contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={800}
                offset={-70}
                className="transition-all duration-500"
              >
                Work with me
            </Link>
              
            </button> */}
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full w-2'>
            <img src={ManImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;