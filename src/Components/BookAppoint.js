import React from 'react'

function BookAppoint() {
  return (
    <div className='grid grid-cols-2 justify-center items-center p-[32px] gap-[24px] '>
        <div className='flex justify-center items-center'>
            <img src='https://alkaison.github.io/Health-Plus/static/media/doctor-book-appointment.edb3f4ac282ff3fefaec.png' width={730} height={814} alt='' className='max-w-[100%]'/>
        </div>
        <div className='ml-[5px]'>
        <div className='mt-[15px] '>
            <h3 className='text-[40px] font-Poppins font-bold tracking-[0.8px] leading-[1.8rem]'>Why Choose Health</h3>
            <div className='bg-[#9D2553] w-[302.5px] h-[4px] mt-[15px]'></div>
        </div>
        <div className='mt-[28px] mb-[32px] font-Rubik text-[#4D4B4B] text-[18px]
           tracking-[0.8px] leading-[1.8rem]'>
            <p>Discover the reasons to choose Health Plus for 
            your healthcare needs. Experience expert care, 
            convenience, and personalized solutions, making 
            your well-being our top priority. Join us on a 
            journey to better health and a happier life.</p>
        </div>
        <div>
            
            <p className='text-[22px] font-Rubik font-bold mt-[40px] mb-[28px]'>Best professional Doctors</p>
        </div>
        <div>
            {/* icon */}
            <p className='text-[22px] font-Rubik font-bold my-[28px]'>Emergency Care</p>
        </div>
        <div>
            {/* icon */}
            <p className='text-[22px] font-Rubik font-bold my-[28px]'>24/7 Support Live Chat</p>
        </div>
        <div>
            {/* icon */}
            <p className='text-[22px] font-Rubik font-bold my-[28px]'>Enrollmet Easy and Quick</p>
        </div>


        <div className='flex flex-row bg-[#1A8EFD] w-[231.44px] h-[52px] justify-center rounded-full
            hover:bg-white  hover:border border-[#1A8EFD] transition-all duration-200'>
                <button className=' text-[20px] text-white hover:text-[#1A8EFD] transition-all duration-200'>Book Appointment</button>
            </div>
        </div>
        
    </div>
  )
}

export default BookAppoint