import React from 'react'
import galwayImg from '../assets/img/quay-st-img.jpg';
import amsterdamImg from '../assets/img/amsterdam.jpg';
const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className='md:grid md:grid-cols-2 md:grid-rows-2 sm:py-16'>

        <div className='mt-4 md:mt-0 text-left flex'>
          <div className='my-auto mx-6'>
              <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
              <p className='text-base lg:text-lg'>
                For anyone who has discovered my site! <br/>
                  My name is Sean Patten and I am a dedicated, enthusiastic software engineer. 
                  I am an expat from Galway, Ireland and I have been living in the amazing city of Amsterdam for over two years now. 
                  In my time here, I have been working as a software engineer and I have developed a lot of great experience. 
                  Primarily as a Lead Fullstack developer, where I implement exciting new features, robust designs or complex SQL queries. 
                  I also take on responsibilities such as creating bash and PowerShell scripts to automate workflows and improve efficiency and ease of deployment.
                  <br/><br/>
                  My main toolkit includes Angular/React, Node.js, TypeScript, and SQL, and I enjoy working across the stack 
                  to deliver clean, maintainable, and user-friendly solutions. I am passionate about problem-solving, 
                  collaborating with teams, and continuously learning new technologies.<br/><br/>
                  
                  Outside of work, I enjoy exploring local culture, meeting new and insteresting people and keeping a touch 
                  of Ireland alive through music and community. <br/><br/>
              </p>
            </div>          
        </div>
        <div className='flex flex-col justify-center items-center gap-6'>
        <img className='mx-auto row-span-1 rounded-3xl py-8 md:py-0' src={galwayImg} width={500} height={500}/>
        <img className='mx-auto rounded-3xl col-span-2 py-8 md:py-0' src={amsterdamImg} width={500} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About