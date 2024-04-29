import React from 'react'
import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa';

function ReviewCard(props) {
    let review=props.review;
  return (
    <div>
        <div className='flex font-Rubik text-[24px]'>
        <FaQuoteLeft className=' text-blue-500'/>
            <p className='mx-[8px]'>{review.review}</p>
            <FaQuoteRight className=' text-blue-500'/>
        </div>
        <div className='mt-[40px] font-bold '>
            <p className='text-[24px] font-Poppins'>{review.name}</p>
            <p className='text-[18px] font-Rubik text-[#677074] mt-[6px]'>{review.address}</p>
        </div>
    </div>
  )
}

export default ReviewCard;