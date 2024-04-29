import React from 'react'

function Card(props) {
  return (
    <div className='  border-[2px] border-[#D7D3D3] rounded-lg '>
    <div className='text-center text-[28px] font-Poppins font-semibold my-[32px] tracking-[.8px]'>{props.heading}</div>
    <div className='text-center text-[#4D4B4B] text-[18px] font-Rubik m-[24px] leading-[1.5rem]'>{props.data}</div>
    </div>
  )
}

export default Card