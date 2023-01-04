import React from 'react';

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      {/* <p className='capitalize text-accent text-sm mb-3'>{item.category}</p> */}
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <text className='text-1xl font-bold caapitalize mb-3 color:[white]'> {item.technologies} </text>
      <p className='text-base max-w-md '>
        {item.description}
      </p>
      <br /> 
     <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
     
      <a href={item.link} className=' px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 '> Visit Website </a> 
  
      </button>
    </div>
  );
};

export default Project;