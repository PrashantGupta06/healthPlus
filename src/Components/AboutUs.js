import React from 'react'

function AboutUs() {
  return (
    <div className='grid grid-cols-2 justify-center items-center gap-[32px] mx-auto p-[32px] bg-[linear-gradient(90deg,#ecf2ff,#fbfcff)]'>
        <div>
            <img src='https://alkaison.github.io/Health-Plus/static/media/doctor-group.01394386d8270bd40bc1.png' 
            alt='' width={750} className='text-center ml-[50px]'/>
        </div>
        <div>
        <div className='mx-auto text-black text-[40px] font-Poppins font-semibold'>
            <h3 className='tracking-[.8px] leading-8'>About Us</h3>
            <div className='w-[140px] h-[4px] bg-[#9D2553] mt-4'></div>
        </div>
        <div>
            <p className='font-Rubik text-[18px] text-[#4D4B4B] my-[32px] tracking-[.8px] leading-8'>Welcome to Health Plus, your trusted partner 
            for accessible and personalized healthcare. Our 
            expert doctors offer online consultations and 
            specialized services, prioritizing your well-being. 
            Join us on this journey towards a healthier you.</p>
        </div>
        <div>
            <div>
                <p className='text-[#4D4B4B] text-[24px] font-Poppins font-semibold tracking-[.8px] leading-8 mb-[24px]'>Your Solutions</p>
            </div>
            <div className='my-[16px] flex flex-col'>
                <div className='flex gap-2'>
                <div className='flex justify-center items-center relative '>
                <div className='bg-[#9D2553] rounded-full w-[20px] h-[20px] text-center absolute z-10'>
                </div>
                       <p className='z-[20] text-white text-[15px] rotate-[90deg] tracking-[.8px]'>{'>'}</p> 
                    
                </div>
                <div>
                <p className='font-Rubik text-[18px] font-bold tracking-[.8px] leading-8'>Choose a Specialist</p>
                </div>
                </div>
                <p className='mx-[24px] my-[8px] text-[16px] font-Rubik text-[#4D4B4B]'>Find your perfect specialist and book 
                with ease at Health Plus. Expert doctors 
                prioritize your health, offering tailored care.</p>
            </div>
            <div className='my-[16px] flex flex-col'>
                <div className='flex gap-2'>
                <div className='flex justify-center items-center relative '>
                <div className='bg-[#9D2553] rounded-full w-[20px] h-[20px] text-center absolute z-10'>
                </div>
                       <p className='z-[20] text-white text-[15px] rotate-[90deg] tracking-[.8px]'>{'>'}</p> 
                    
                </div>
                <div>
                <p className='font-Rubik text-[18px] font-bold tracking-[.8px] leading-8'>Choose a Specialist</p>
                </div>
                </div>
                <p className='mx-[24px] my-[8px] text-[16px] font-Rubik text-[#4D4B4B]'>Find your perfect specialist and book 
                with ease at Health Plus. Expert doctors 
                prioritize your health, offering tailored care.</p>
            </div>
            <div className='my-[16px] flex flex-col'>
                <div className='flex gap-2'>
                <div className='flex justify-center items-center relative '>
                <div className='bg-[#9D2553] rounded-full w-[20px] h-[20px] text-center absolute z-10'>
                </div>
                       <p className='z-[20] text-white text-[15px] rotate-[90deg] tracking-[.8px]'>{'>'}</p> 
                    
                </div>
                <div>
                <p className='font-Rubik text-[18px] font-bold tracking-[.8px] leading-8'>Choose a Specialist</p>
                </div>
                </div>
                <p className='mx-[24px] my-[8px] text-[16px] font-Rubik text-[#4D4B4B]'>Find your perfect specialist and book 
                with ease at Health Plus. Expert doctors 
                prioritize your health, offering tailored care.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutUs