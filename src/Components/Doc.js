import React from 'react'

function Doc() {
  return (
    <div >
    <div className='bg-[#DDE5F8] rounded-2xl'>
    <img src='https://alkaison.github.io/Health-Plus/static/media/profile-1.0261bb4efe7a9075c56a.png' width={332} alt='' className='pt-[16px] px-[32px]'/>
    </div>
    <div>
        <h3 className='text-[22px] font-Rubik font-bold mt-[12px]'>Dr. Kathryn Murphy</h3>
        <p className='text-[18px] font-Poppins text-[#4D4B4B] mt-[6px] mb-[8px]'>General Surgeons</p>
        <div className='flex gap-2 text-[18px] font-Rubik'>
            <p className='font-bold'>4.9</p>
            <p className='text-[#5A5A5A] font-bold'>(1800+ Reviews)</p>
        </div>
    </div>
    </div>
  )
}

export default Doc