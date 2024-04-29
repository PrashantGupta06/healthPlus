import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='h-[80px] flex flex-row justify-between items-center pb-4 pt-[10px]'>
            <div className='flex flex-row justify-center items-baseline'>
                <h1 className='text-[32px] text-[#1A8EFD] font-semibold pl-8 pr-2 font-Poppins tracking-[.05rem]'>Health</h1>
                <p className='text-[#54DE54] text-[40px] font-bold'>+</p>
            </div>
            <div>
                <ol className='flex flex-row justify-between gap-9  text-[18px] font-Rubik'>
                    <li className='hover:text-[#1A8EFD] '><button className='tracking-[.05rem]'>Home</button></li>
                    <li className='hover:text-[#1A8EFD]'><button className='tracking-[.05rem]'>Services</button></li>
                    <li className='hover:text-[#1A8EFD]'><button className='tracking-[.05rem]'>About</button></li>
                    <li className='hover:text-[#1A8EFD]'><button className='tracking-[.05rem]'>Reviews</button></li>
                    <li className='hover:text-[#1A8EFD]'><button className='tracking-[.05rem]'>Doctors</button></li>
                </ol>
            </div>
            <div className='flex flex-row bg-[#1A8EFD] w-[150px] h-[55px] mr-8 justify-center rounded-full
            hover:bg-white  hover:border border-[#1A8EFD] transition-all duration-200'>
                <button className='text-[20px] text-white hover:text-[#1A8EFD] transition-all duration-200 font-Rubik'>Live Chat</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar