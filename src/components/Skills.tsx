import React from 'react'
import htmlImg from '../assets/img/html.png';
import cssImg from '../assets/img/css.png';
import jsImg from '../assets/img/javascript.png';
import reactImg from '../assets/img/react.png';
import angularImg from '../assets/img/angular.png';
import tailwindImg from '../assets/img/tailwind.png';
const Skills = () => {
  return (
    <div className='bg-black border border-gray-600 text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6
      place-items-center md:flex md:justify-between md:items-center'>
       
        <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
          My <br/> Tech <br/> Stack 
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={htmlImg} alt=''/>
          <p className='mt-2'>HTML</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={cssImg} alt='' width={100} height={100}/>
          <p className='mt-2'>CSS</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={jsImg} alt='' width={100} height={100}/>
          <p className='mt-2'>Javascript</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={tailwindImg} alt='' width={100} height={100}/>
          <p className='mt-2'>Tailwind</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={angularImg} alt='' width={100} height={100}/>
          <p className='mt-2'>Angular</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
          <img src={reactImg} alt='' width={100} height={100}/>
          <p className='mt-2'>React</p>
        </div>
      </div>
  )
}

export default Skills