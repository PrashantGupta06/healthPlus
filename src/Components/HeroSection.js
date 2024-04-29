import React from 'react';
function HeroSection() {
  return (
    <div className='w-[100vw] h-[769px] bg-[linear-gradient(90deg,#ecf2ff,#fbfcff)] flex flex-row justify-between items-center p-[32px] gap-[24px]'>
    <div className=' pl-[32px]'>
    <div className='flex flex-row gap-2 items-baseline'>
            <p className='text-[22px]'>❤️</p>
            <h3 className='text-[22px] font-Rubik font-bold text-[#4D4B4B] mb-[12px]'>
            Health comes first</h3>
        </div>
        <div>
            <p className='text-[40px] font-semibold tracking-wide font-Rubik'>Find your Doctor and 
            <br/>
            make an Appointments</p>
        </div>
        <div>
            <p className='text-[#4D4B4B] text-[18px] py-[32px]  font-Rubik'>
            Talk to online doctors and get medical advice, 
            online<br/> prescriptions, refills and medical notes within<br/> minutes. 
            On-demand healthcare services at your<br/> fingertips.
            </p>
        </div>
        <div className='flex flex-row bg-[#1A8EFD] w-[231.44px] h-[52px] justify-center rounded-full
            hover:bg-white  hover:border border-[#1A8EFD] transition-all duration-200'>
                <button className=' text-[20px] text-white hover:text-[#1A8EFD] transition-all duration-200'>Book Appointment</button>
            </div>
            <div className='flex flex-row justify-between gap-[40px] mt-[40px]'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='font-Rubik text-[#1A8EFD] text-[32px] font-bold'>145K+</p>
                    <h3 className='font-Poppins text-[22px] text-[#4D4B4B] tracking-[.7px]'>Receive Patients</h3>
                </div>
                <div  className='flex flex-col justify-center items-center'>
                    <p className='font-Rubik text-[#1A8EFD] text-[32px] font-bold'>50+</p>
                    <h3 className='font-Poppins text-[22px] text-[#4D4B4B] tracking-[.7px]' >Expert Doctors</h3>
                </div>
                <div  className='flex flex-col justify-center items-center'>
                    <p className='font-Rubik text-[#1A8EFD] text-[32px] font-bold'>10+</p>
                    <h3 className='font-Poppins text-[22px] text-[#4D4B4B] tracking-[.7px]'>Years of Experience</h3>
                    
                </div>
            </div>
    </div>
    <div className='pr-[32px]'>
    <img src='https://alkaison.github.io/Health-Plus/static/media/doctor-picture.0261bb4efe7a9075c56a.png' width={730} className=''/>
    </div>
        
    </div>
  )
}

export default HeroSection