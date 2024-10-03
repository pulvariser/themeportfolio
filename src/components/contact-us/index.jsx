import React, { useState } from 'react';
import MovingObj from '../../shared/moving-obj';

const Contact = () => {
  const [status, setStatus] = useState('');

  const details = [
    {
      icon: 'fa fa-map-marker text-[#fa2d5a]',
      title: 'Address',
      desc: '14 Sti Kilda Road, 1412 New York, USA',
    },
    {
      icon: 'fa fa-phone text-[#fa2d5a]',
      title: 'Phone',
      desc: '+12 125 124 8574',
    },
    {
      icon: 'fa fa-envelope text-[#fa2d5a]',
      title: 'Email',
      desc: 'admin@example.com',
    },
    {
      icon: 'fa fa-globe text-[#fa2d5a]',
      title: 'Website',
      desc: 'www.example.com',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      mobile: e.target.mobile.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
        e.target.reset(); // Reset the form after submission
      } else {
        setStatus('Failed to send email. Please try again later.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='min-h-screen max-w-full space-y-16 mt-16 mb-10'>
      <div className='flex items-center justify-center flex-col gap-2'>
        <p className='text-[14px] px-[10px] inline-block py-[1px] font-poppins bg-[#fa2d5a] rounded-[4px] font-[500] leading-[26px] text-[#fff] shadow'>
          Connect Me
        </p>
        <h2 className='text-[#fa2d5a] font-poppins text-[52px] font-[900] uppercase'>
          <span className='text-[#4671ff] font-poppins text-[52px] font-[900] uppercase' style={{ paddingRight: '8px' }}>
            get in
          </span>
          Touch.
        </h2>

        <MovingObj />

        <p className='text-[16px] leading-[1.8] text-[#6a6a6a] font-[400] font-poppins max-w-[700px] text-center mt-4'>
          "Looking to bring your web ideas to life? Contact me today for custom web development solutions!"
        </p>
      </div>

      <section className='ml-28 mr-28 grid md:grid-cols-2 gap-6'>
        <aside className='space-y-6'>
          <div className='flex items-start flex-col gap-1 justify-start'>
            <h2 className='text-[#4671ff] text-[26px] font-[500] capitalize font-poppins'>my address info</h2>
            <div className='border border-solid border-[#fa2d5a] h-[3px] w-[45px] bg-[#fa2d5a] rounded-[30px]'></div>
          </div>

          <div>
            <p className='font-[400] leading-[1.9] font-poppins text-[#666]'>
              I Am Available for Freelance Work. Connect with Me via <br />
              <span className='font-[600]'>Phone:</span> <span className='text-[#fa2d5a]'>+12 125 124 8574</span> or{' '}
              <span className='font-[600]'>Email:</span>
              <span className='text-[#fa2d5a]'> admin@example.com</span>
            </p>
          </div>

          <div>
            <ul className='flex flex-col gap-4'>
              {details.map((detail, index) => {
                return (
                  <li key={index}>
                    <div className='font-[400] leading-[24px] text-[#8e8e8e] border-[1px] border-solid border-[#ddd] rounded-[4px] px-[10px] py-[14px] flex items-start gap-4'>
                      <div className='bg-[#eee] w-[50px] h-[50px] flex items-center justify-center rounded-[40px]'>
                        <i className={detail.icon} style={{ fontSize: '24px' }}></i>
                      </div>

                      <div>
                        <p className='capitalize font-[500] font-poppins text-[16px] text-[#666]'>{detail.title}</p>
                        <p className='capitalize font-[400] font-poppins text-[14px] text-[#666] opacity-[0.8]'>{detail.desc}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
        <aside className='space-y-8'>
          <div className='flex items-start flex-col gap-1 justify-start'>
            <h2 className='text-[#4671ff] text-[26px] font-[500] capitalize font-poppins'>contact me</h2>
            <div className='border border-solid border-[#fa2d5a] h-[3px] w-[45px] bg-[#fa2d5a] rounded-[30px]'></div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className='flex items-center gap-5 flex-col'>
              <div className='grid md:grid-cols-2 gap-6'>
                <input
                  type='text'
                  name='fullname'
                  className='rounded-[4px] font-poppins font-[400] text-[16px] px-4 py-3 outline-none border border-solid border-[#ddd] bg-[#fff] text-[rgb(102,102,102)] placeholder-[#666] transition duration-150 ease-in-out focus:border-[#fa2d5a] focus:shadow-md focus:shadow-blue-200 focus:outline-none'
                  placeholder='Your Name'
                  required
                />

                <input
                  type='email'
                  name='email'
                  className='rounded-[4px] font-poppins font-[400] outline-none text-[16px] px-4 py-3 border border-solid border-[#ddd] bg-[#fff] text-[rgb(102,102,102)] placeholder-[#666] transition duration-150 ease-in-out focus:border-[#fa2d5a] focus:shadow-md focus:shadow-blue-200 focus:outline-none'
                  placeholder='Your Email'
                  required
                />

                <input
                  type='text'
                  name='subject'
                  className='rounded-[4px] font-poppins font-[400] outline-none text-[16px] px-4 py-3 border border-solid border-[#ddd] bg-[#fff] text-[rgb(102,102,102)] placeholder-[#666] transition duration-150 ease-in-out focus:border-[#fa2d5a] focus:shadow-md focus:shadow-blue-200 focus:outline-none'
                  placeholder='Write a Subject'
                  required
                />

                <input
                  type='tel'
                  name='mobile'
                  className='rounded-[4px] font-poppins font-[400] outline-none text-[16px] px-4 py-3 border border-solid border-[#ddd] bg-[#fff] text-[rgb(102,102,102)] placeholder-[#666] transition duration-150 ease-in-out focus:border-[#fa2d5a] focus:shadow-md focus:shadow-blue-200 focus:outline-none'
                  placeholder='Phone Number'
                  required
                />

                <textarea
                  name='message'
                  className='col-span-2 h-36 rounded-[4px] font-poppins font-[400] outline-none text-[16px] px-4 py-3 border border-solid border-[#ddd] bg-[#fff] text-[rgb(102,102,102)] placeholder-[#666] p-2 transition duration-150 ease-in-out focus:border-[#fa2d5a] focus:shadow-md focus:shadow-blue-200 focus:outline-none'
                  placeholder='Your Message...'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className='bg-[#fa2d5a] rounded-[4px] font-poppins font-[500] h-[46px] w-fit px-6 uppercase text-[15px] outline-none hover:bg-[#4671ff] text-[#fff]'
                style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
              >
                <span className='mr-3'>Submit</span>
                <i className='fa fa-envelope'></i>
              </button>
            </form>
            {status && <p className='mt-4 text-red-500'>{status}</p>}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Contact;
