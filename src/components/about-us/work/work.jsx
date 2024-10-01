

const MyWorks = () => {
 
  

  const works = [
   {
       icon : 'fa fa-home',
       title : 'javascript',
       desc : 'Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
   },
   {
       icon : 'fa fa-home',
       title : 'javascript',
       desc : 'Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
   },
   {
       icon : 'fa fa-home',
       title : 'javascript',
       desc : 'Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
   },
   {
       icon : 'fa fa-home',
       title : 'javascript',
       desc : 'Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
   },
   {
       icon : 'fa fa-home',
       title : 'javascript',
       desc : 'Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
   },
   {
       icon : 'fa fa-home',
       title : 'javascript',
       desc : 'Lorem ipsum dolor sit amet, consect incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
   },
   
  ]

 return (
   <div className='ml-28 flex flex-col items-center justify-center font-poppins gap-10'>
    <div className='mr-28 flex items-center flex-col gap-1  '>
        <h2 className='text-[#4671ff] text-[26px] font-[600] '>What Can I Do</h2>
        <div className=' border border-solid border-[#fa2d5a] p-[0.8px] w-12 bg-[#fa2d5a] rounded-lg'>
       </div>
    </div>

   <div className=' min-h-fit flex items-center justify-center '>
         <ul className='grid grid-cols-3 gap-7 mr-28'>
            {
               works.map((work,index)=>{
                 return( 
                 <li key={index}>
                     <div className='h-fit bg-[#ffffff] w-[326px] font-poppins rounded-[6px] hover:bg-[#fa2d5a] hover:transition-all hover:duration-100 hover:ease-out  ' style={{ boxShadow: '0 0px 10px rgba(0, 0, 0, 0.1)'}} >
                         <div className='flex flex-col items-center justify-between py-8 text-center gap-4'> 
                          <div className="w-[90px] h-[90px] rounded-[6px] bg-[#fa2d5a] flex items-center justify-center  hover:text-[#fa2d5a] hover:rounded-full hover:bg-[#fff] ">
                            <div className="text-[42px] text-[#fff] ">                                                     
                                <i className={work.icon}></i>       
                            </div> 
                         </div>       
                         <div className='text-lg font-[500] text-[#666]  font-poppins capitalize hover:text-[#fff]'>
                             {work.title}
                         </div>
                         <div className='text-[14px] text-[#8c8c8c] font-[400] font-poppins leading-[1.8] hover:text-[#fff]'>
                             {work.desc}
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

export default MyWorks

