import React from 'react'
import Image from '../../images/hero_img_1.jpg'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div className='overflow-hidden relative w-full h-screen'>
          <div >
              <img src={Image} alt='main' className='w-full h-screen object-cover'/>
              <div className=' absolute rounded-full top-[-40%] left-auto right-[-150px] w-[60%] h-[140%] bg-[#fd1b0a] transform rotate-[-55deg] opacity-[0.1]'> </div>
          </div>
          <div className='absolute top-36 left-auto right-20 w-6/12  flex flex-col
           justify-center gap-2'>
              <h3 className='text-[#6a6a6a] font-poppins text-[22px] font-[500] '>I'M Mayur Burange</h3>
               <h2 className='text-[#4671ff] font-poppins text-[44px] font-[900]'>
                 I Am a{' '}
                <span style={{ color: '#fa2d5a',fontFamily:'poppins', fontWeight: '900', fontSize:'44px'}}>
             <Typewriter
            words={['Web Developer.', 'Full Stack Engineer.', 'UI/UX Developer.', 'Web Designer.']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={125}
            delaySpeed={5000}
           
          />
        </span> 

       </h2>





               <p className='text-[16px] leading-[1.8] text-[#6a6a6a] font-[400]  font-poppins'>I'm a Freelance Web Developer based in India and I'm very passionate and dedicated to my work, I have acquired the skills necessary to build great and premium websites.</p>
               <div className='flex items-center  gap-4 mt-5 '>
                  <button className='text-[15px]  py-0 font-poppins bg-[#fa2d5a] rounded-[4px] font-[500] uppercase leading-[46px] text-[#fff] outline-none overflow-hidden  tracking-tighter w-36 hover:bg-[#4671ff] hover:text-[#fff] shadow'>
                    ABOUT ME
                   <i className='fa fa-user-circle ml-3'></i>
                  </button>
                  <button className='text-[15px]  py-0 font-poppins bg-[#4671ff] rounded-[4px] font-[500] uppercase leading-[46px] text-[#fff] outline-none overflow-hidden  tracking-tighter w-44 hover:bg-[#fa2d5a] hover:text-[#fff] shadow'>
                     GET IN TOUCH
                    <i className='fa fa-envelope ml-3 '></i>
                    </button>
               </div>
          </div>
    </div>
  )
}

export default Home
