

const Skills = () => {
 
  

   const skills = [
    {
        percent : '80%',
        tool : 'javascript',
        desc : 'Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
    },
    {
        percent : '85%',
        tool : 'javascript',
        desc : 'Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
    },
    {
        percent : '90%',
        tool : 'javascript',
        desc : 'Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
    },
    {
        percent : '82%',
        tool : 'javascript',
        desc : 'Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
    },
    {
        percent : '86%',
        tool : 'javascript',
        desc : 'Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
    },
    {
        percent : '94%',
        tool : 'javascript',
        desc : 'Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
    },
   ]

  return (
    <div className='ml-28 flex flex-col items-center justify-center font-poppins gap-9'>
     <div className='mr-28 flex items-center flex-col gap-1 '>
         <h2 className='text-[#4671ff] text-[26px] font-[600] '>My Skills</h2>
         <div className=' border border-solid border-[#fa2d5a] p-[0.8px] w-12 bg-[#fa2d5a] rounded-lg'>
        </div>
     </div>

    <div className=' min-h-fit flex items-center justify-center '>
          <ul className='grid grid-cols-3 gap-7 mr-28'>
             {
                skills.map((skill,index)=>{
                  return( 
                  <li key={index}>
                      <div className='h-fit bg-[#ffffff] w-[326px] font-poppins rounded-[6px]'style={{ boxShadow: '0 0px 10px rgba(0, 0, 0, 0.1)'}} >
                          <div className='flex flex-col items-center justify-between py-8 text-center  gap-4'>
                            <div className='w-[140px] h-[140px]  rounded-full border-[11px] border-solid border-[#fa2d5a] flex items-center justify-center relative'>
                             <p className='z-1 text-3xl font-[600] text-[#666] font-poppins'>{skill.percent}</p>
                              <p className='w-[140px] h-[140px] rounded-full border-[11px] border-solid  absolute border-[#666]'  ></p>
                             
                             
                          </div>
                          <div className='text-lg font-[500] text-[#666]  font-poppins capitalize'>
                              {skill.tool}
                          </div>
                          <div className='text-[14px] text-[#8c8c8c] font-[400] font-poppins leading-[1.8]'>
                              {skill.desc}
                          </div>
                          
                      </div>
                      </div>
                   </li>
                )})
             }
            
          </ul>
    </div>
    </div>
  )
}

export default Skills
