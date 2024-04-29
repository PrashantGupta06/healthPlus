import React from 'react'
import Doc from './Doc'

function Doctors() {
  return (
    <div className='flex flex-col justify-center items-center p-[32px] mb-[32px]'>
        <div className=''>
            <h3 className='text-[40px] font-Poppins font-bold'>Meet Our Doctors</h3>
            <div className='h-[4px] w-[220px] bg-[#9D2553] mt-[10px]'></div>
        </div>
        <div className=''>
            <p className='font-Rubik text-[#4D4B4B] text-[20px] mt-[60px]
           tracking-[0.8px] leading-[1.8rem] text-center'>
            Meet our exceptional team of specialist doctors, 
            dedicated to providing top-notch healthcare services 
            at Health Plus. Trust in their knowledge and experience 
            to lead you towards a healthier and happier life.
            </p>
        </div>
        <div className='grid grid-cols-4 justify-center items-center mt-[64px] gap-[32px]'>
            <Doc/>
            <Doc/>
            <Doc/>
            <Doc/>
        </div>
    </div>
  )
}

export default Doctors