
import React from 'react'
import Skills from './skills/skills'
import MyWorks from './work/work'
import EduExp from './education/eduexp'
import MovingObj from '../../shared/moving-obj'

const  About  = () => {

   const informations = [
     {  
       info:'name :',
       value:'Mayur Burange'
      },
      {  
        info:'email :',
        value:'mayurburange72@gmail.com'
      },
      {  
       info:'date of birth :',
        value:'11 May, 1997'
      },
      {  
        info:'study :',
        value:'R.T.M Nagpur University'
      },
      {  
       info:'work status :',
        value:'Full stack web developer'
      },
     {  
      info:'phone :',
       value:'+91 7507367559'
     },
     {  
      info:'nationlity :',
       value:'Indian'
     },
     {  
      info:'Address :',
       value:'Karve Nagar Pune 442001'
     },
     {  
      info:'freelance :',
       value:'Available'
     },
     {  
      info:'website :',
       value:' www.mywebsite.com'
     },
    
   ]

   const analytics =[
    {
      icon:'fa fa-user ',
      text:'650+ Projects Complate'
    },
    {
      icon:'fa fa-coffee',
      text:'1200+ Cup of Coffee'
    },
    {
      icon:'fa fa-smile-o',
      text:'600+ Satisfied Clients'
    },
    {
      icon:'fa fa-certificate',
      text:'8.5 Years Job Experience'
    },
    {
      icon:'fa fa-trophy',
      text:'50+ Awards Winners'
    },
    {
      icon:'fa fa-code',
      text:'2600+ Lines of Codes'
    },
   ]

  return (
    <div className='min-h-screen max-w-full space-y-24 mt-20 '>
    <div className='flex items-center justify-center flex-col gap-2'>
            <p className='text-[14px]  px-[10px]  inline-block  py-[1px] font-poppins bg-[#fa2d5a] rounded-[4px] font-[500] leading-[26px] text-[#fff] shadow'>
               About Main Info
             </p>
             <h2 className='text-[#fa2d5a] font-poppins text-[52px] font-[900] uppercase'><span className='text-[#4671ff] font-poppins text-[52px] font-[900] uppercase'>About  </span>Me.</h2>
             {/* <div className='border border-solid border-[#fa2d5a] p-[1px] w-20 bg-[#fa2d5a] rounded-lg'></div> */}
              <MovingObj/>

             <p className='text-[16px] leading-[1.8] text-[#6a6a6a] font-[400]  font-poppins max-w-[700px] text-center mt-4'>Lorem ipsum dolor sit amet, consect adipisic elit, sed do eiusmod tempor incididunt ut labore et d magna aliqua enim sed do sit.</p>
    </div>
     
     <div className='grid grid-cols-3 ml-28  my-20 '>
          <div>
             <img src='/about_img.jpg' alt="aboutimg" className='rounded-[10px]  h-auto w-[100%]  object-cover ' style={{boxShadow:' 0 7px 15px rgba(0, 0, 0, 0.12)',border:'5px solid rgba(0, 0, 0, 0.05)'}} />
          </div>
          <div className='ml-12 flex flex-col gap-6 col-span-2 pr-28' >
             <div>
                <h1 className='font-[600] text-[30px] text-[#4671ff] leading-[1.4] font-poppins'>Hello, I'm Elvin Joselin Creative Web Designer Based in USA.</h1>
             </div>
             <div className='space-y-4 mr-[35px] '>
                <p className='leading-[1.8] text-[#7d7d7d] font-poppins text-[15px] font-[400]' >- It's My Pleasure to Introduce About Myself.</p>
                <p className='leading-[1.8] text-[#7d7d7d] font-poppins text-[15px] font-[400]'>I'M Elvin Joselin Australia. Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am.</p>
                <p className='leading-[1.8] text-[#7d7d7d] font-poppins text-[15px] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Ut enim ad minim veniam.</p>
                
             </div>
             <div >
                 <ul className='grid grid-cols-2 gap-4'>
                  {
                     informations.map((information,index)=>{
                       return(
                        <li key={index} className='flex gap-2 '>
                           <span className='capitalize font-[600] font-poppins text-[#666666] text-[15px] opacity-[1]'>{information.info}</span>
                           <span className='font-[400] font-poppins text-[#666666] text-[15px] opacity-[0.85]'>{information.value}</span>
                        </li>
                      )})
                  }
                 </ul>
             </div>

             <div className='flex items-center gap-4 mt-3 '>
                  <button className='text-[15px]  py-0 px-8 font-poppins bg-[#fa2d5a] rounded-[4px] font-[500] uppercase leading-[46px] text-[#fff] outline-none overflow-hidden  tracking-tighter  hover:bg-[#4671ff] hover:text-[#fff] shadow'>
                    Download My CV
                   <i className='fa fa-user-circle ml-3'></i>
                  </button>
                  <button className='text-[15px]  py-0 px-8 font-poppins bg-[#fa2d5a] rounded-[4px] font-[500] uppercase leading-[46px] text-[#fff] outline-none overflow-hidden  tracking-tighter  hover:bg-[#4671ff] hover:text-[#fff] shadow'>
                     Hire Me
                    <i className='fa fa-envelope ml-3 '></i>
                    </button>
               </div>

            </div>

     </div>
    
    <div className='ml-28 min-h-32 flex items-center justify-center'>

       <ul className='grid grid-cols-6 gap-7 mr-28'>
         {
          analytics.map((analytic,index)=>{
            return(
            <li key={index} className='flex'>
              
               <div className=' w-[600px] font-poppins rounded-[6px] bg-[#ffffff]  text-[#3a0b0b] 'style={{border: '1px dashed #ddd',padding:'30px 15px 25px 15px', boxShadow: '0 0px 10px rgba(0, 0, 0, 0.1)'}} >
                   <div className='flex items-center flex-col '>
                      <div className='text-[32px] text-[#FD1B05] '>
                          <i className={analytic.icon}  ></i>
                      </div>
                      <div className=' capitalize text-[14px] font-[400] text-[#666] leading-[1.6] text-center'>
                           <p>
                            {analytic.text}
                           </p>
                      </div>
                   </div>
               </div>
              
            </li>
            )
          })
         }
       </ul>
    </div>

    <Skills/>
    <EduExp/>
    <MyWorks/>
    
    </div>
  )
}

export default About
