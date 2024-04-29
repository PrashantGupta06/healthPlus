import React from 'react'

function Footer() {
  return (
    <div className='p-[40px] flex justify-between items-start flex-wrap bg-[#1B2433]'>
    <div>
    <div className='flex flex-row justify-start items-baseline'>
                <h1 className='text-[40px] text-[#1A8EFD] font-semibold pr-2 font-Poppins tracking-[.05rem]'>Health</h1>
                <p className='text-[#54DE54] text-[40px] font-bold'>+</p>
    </div>
    <p className='text-[#D0D3DA] text-[20px] font-Rubik mt-[16px] mb-[40px] tracking-[.9px] leading-[1.7rem] text-left'>Talk to online doctors and get medical <br/>
    advice, online prescriptions, refills and <br/>
    medical notes within minutes. On-<br/>demand 
    healthcare services at your <br/>fingertips.</p>
    <p className='text-[22px] font-Rubik text-white font-bold'>Stay Update to our Newsletter</p>
    <div className='flex justify-center items-baseline'>
        <input type='text' placeholder='Enter your email address     ' className='mt-[20px] mr-[8px] 
        opacity-80 px-[16px] py-[22px] text-[#75756D] text-[20px] bg-[#293241] w-[300px] h-[56px] text-center font-Rubik rounded-full'/>
        <div className='flex flex-row bg-[#1A8EFD] w-[150px] h-[52px] justify-center rounded-full
            hover:bg-white  hover:border border-[#1A8EFD] transition-all duration-200'>
                <button className=' text-[20px] text-white hover:text-[#1A8EFD] transition-all duration-200'>Subscribe</button>
            </div>
    </div>
    </div>
    <div className='flex flex-col'>
        <h3 className='text-white font-Rubik text-[24px] font-bold my-[16px]'>Services</h3>
        <ul className='text-[16px] font-Rubik font-bold flex flex-col space-y-[24px] '>
            <li className=''><a className='text-[#A5A7AC] cursor-pointer hover:underline decoration-dotted underline-offset-4 decoration-2'>Emergency Care</a></li>
            <li className=''><a className='text-[#A5A7AC] cursor-pointer hover:underline decoration-dotted underline-offset-4 decoration-2'>Heart Disease</a></li>
            <li className=''><a className='text-[#A5A7AC] cursor-pointer hover:underline decoration-dotted underline-offset-4 decoration-2'>Dental Care</a></li>
            <li className=''><a className='text-[#A5A7AC] cursor-pointer hover:underline decoration-dotted underline-offset-4 decoration-2'>prescription</a></li>
            <li className=' '><a className='text-[#A5A7AC] cursor-pointer hover:underline decoration-dotted underline-offset-4 decoration-2'>Insights for doctors</a></li>
        </ul>
        
    </div>
    <div className='flex flex-col'>
        <h3 className='text-white font-Rubik text-[24px] font-bold my-[16px]'>Legal</h3>
        <ul className='text-[16px] font-Rubik font-bold flex flex-col space-y-[24px] '>
            <li className=''><a className='text-[#A5A7AC] cursor-pointer hover:underline decoration-dotted underline-offset-4 decoration-2'>Emergency Care</a></li>
            <li className=''><a className='text-[#A5A7AC] cursor-pointer hover:underline decoration-dotted underline-offset-4 decoration-2'>Heart Disease</a></li>
            <li className=''><a className='text-[#A5A7AC] cursor-pointer hover:underline decoration-dotted underline-offset-4 decoration-2'>Dental Care</a></li>
            <li className=''><a className='text-[#A5A7AC] cursor-pointer hover:underline decoration-dotted underline-offset-4 decoration-2'>prescription</a></li>
            <li className=' '><a className='text-[#A5A7AC] cursor-pointer hover:underline decoration-dotted underline-offset-4 decoration-2'>Insights for doctors</a></li>
        </ul>
        
    </div>
    <div className='flex flex-col'>
        <h3 className='text-white font-Rubik text-[24px] font-bold my-[16px]'>Talk To Us</h3>
        <ul className='text-[16px] font-Rubik font-bold flex flex-col space-y-[24px] '>
            <li className=''><a className='text-[#A5A7AC] cursor-pointer hover:underline decoration-dotted underline-offset-4 decoration-2'>support@healthplus.com</a></li>
            <li className=''><a className='text-[#A5A7AC] cursor-pointer hover:underline decoration-dotted underline-offset-4 decoration-2'>appointment@healthplus.com</a></li>
            <li className=''><a className='text-[#A5A7AC] cursor-pointer hover:underline decoration-dotted underline-offset-4 decoration-2'>+022 5454 5252</a></li>
            <li className=''><a className='text-[#A5A7AC] cursor-pointer hover:underline decoration-dotted underline-offset-4 decoration-2'>+022 2326 6232</a></li>
        </ul>
        
    </div>
    </div>
  )
}

export default Footer