import React from 'react';

// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block center'> My Top Technical Skills</h2>
      <div className='container mx-auto'>
        <div
          className='grid grid-cols-7 md:grid-flow-col'
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='lg:h-20' src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;