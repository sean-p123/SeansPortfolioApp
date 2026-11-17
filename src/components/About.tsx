import React from 'react'
import galwayImg from '../assets/img/quay-st-img.jpg';
import amsterdamImg from '../assets/img/amsterdam.jpg';
const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>

        <div className='mt-4 md:mt-0 text-left flex'>
          <div className='my-auto mx-6'>
              <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
              <p className='text-base lg:text-lg'>
                For anyone who has discovered my site! <br/><br/>
                My name is Sean Patten, and I am a software engineer originally from Galway, Ireland, now living in Amsterdam, Netherlands.
                I have over three years of professional experience developing and maintaining web applications, working across both frontend and backend technologies. 
                My experience includes working as a Lead Full-Stack Developer, building applications and features from the ground up, designing application architecture, 
                developing complex database queries, and improving system performance and security. More recently, I have been working as a Medior Frontend Developer at 
                Software Improvement Group, focusing on developing maintainable, high-quality applications, building reusable components, improving user experiences, 
                and ensuring software quality through automated testing. <br/><br/>

                My technical toolkit includes Angular, React, TypeScript, JavaScript, Node.js, C#/.NET, and SQL. I also have experience with REST API development, 
                database management, Docker, CI/CD pipelines, and automated testing. I enjoy working across the stack, from designing intuitive user interfaces and 
                reusable components to implementing backend functionality, optimising database performance, and building secure application workflows. <br/><br/>

                I have a particular interest in software architecture, application security, and writing clean, maintainable code. I also enjoy exploring new development 
                tools and incorporating AI-assisted development into my workflow to improve productivity, code quality, and problem-solving.
                I am passionate about tackling challenging problems, learning new technologies, and continuously developing as a software engineer. <br/><br/>

                Outside of software development, I enjoy exploring new places, meeting interesting people, and keeping a little bit of Ireland alive through music and community.
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