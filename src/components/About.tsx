import React from 'react'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
          <div className='my-auto mx-6'>
              <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
              <p className='text-base lg:text-lg'>
                This is the about section
              </p>
            </div>          
        </div>

      </div>
    </div>
  )
}

export default About