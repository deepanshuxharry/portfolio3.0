// import React from 'react'
// import { Cards } from './Cards'

// export const Projects = () => {
//   return (
//     <><div className='mt-32 w-full'>
//     <div style={{ color:"rgb(179, 40, 108)" }} className='w-3/4 mx-auto' > <h1  className='  tracking-wide font-semibold  text-lg'>WHAT I HAVE DONE SO FAR</h1>
//     <h1 style={{ fontFamily: "Morganite" }} className='tracking-widest text-8xl'>PROJECTS</h1></div>
//    </div>
//    <Cards></Cards>
//     </>
//   )
// }


import React, { useState, useEffect } from 'react';
import { Cards } from './Cards';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects-section');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true); // Section is in view, trigger animation
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="projects-section" className='mt-32 w-full'>
        <div style={{ color: "rgb(179, 40, 108)" }} className='w-3/4 mx-auto'>
          <h1
            className={`tracking-wide font-semibold text-lg transition-transform duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            WHAT I HAVE DONE SO FAR
          </h1>
          <h1
            style={{ fontFamily: "Morganite" }}
            className={`tracking-widest text-8xl transition-transform duration-1000 ease-out delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            PROJECTS
          </h1>
        </div>
      </div>
      <Cards />
    </>
  );
};
