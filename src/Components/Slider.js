import React, { useState } from 'react'
import ReviewCard from './ReviewCard'

function Slider(props) {
    let reviews=props.reviews;
    const [index,setIndex] = useState(0);

    function leftHandler()
    {
        if(index-1<0)
        {
            setIndex(reviews.length-1);
        }
        else
        {
            setIndex(index-1);
        }
    }

    function rightHandler()
    {
        if(index+1>=reviews.length)
        {
            setIndex(0);
        }
        else
        {
            setIndex(index+1);
        }
    }
  return (
    <div className='bg-[linear-gradient(90deg,#ecf2ff,#fbfcff)] p-[32px]'>
        <span className='my-[16px] flex font-bold gap-2'>
            <p className='text-[32px] font-Rubik text-[#6F7074]'>More over</p>
            <p className='text-[32px] font-Rubik text-[#178BFF]'>1500+ Customers</p>
        </span>
        <div className=' '>
            <p className='text-[36px] font-Rubik font-bold'>Don't believe us, Check clients word</p>
        </div>
        <ReviewCard review={reviews[index]}/>
        <div className='flex flex-row justify-center gap-10'>
            <button onClick={leftHandler} className='text-[40px] font-Rubik text-blue-500'>{"<"}</button>
            <button onClick={rightHandler} className='text-[40px] font-Rubik text-blue-500'>{">"}</button>
        </div>
    </div>
  )
}

export default Slider