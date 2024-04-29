import React from 'react'
import Card from './Card'

function CardSection() {
  return (
    <div className='my-[64px] px-[32px]  flex flex-col'>
    <div className=' mb-[128px]'>
    <div className='flex flex-col justify-center items-center text-black text-[40px] font-Poppins font-semibold'>
            <h3 className='tracking-[.8px] leading-8'>What We Do</h3>
            <div className='w-[184px] h-[4px] bg-[#9D2553] mt-4'></div>
        </div>
        <div className=''>
            <p className='font-Rubik text-[18px] text-[#4D4B4B] text-center mt-[64px] tracking-[.8px] leading-8'>We bring healthcare to your convenience, offering a comprehensive 
            range of on-demand medical services tailored to your needs. Our platform 
            allows you to connect with experienced online doctors who provide expert 
            medical advice, issue online prescriptions, and offer quick refills whenever 
            you require them.</p>
        </div>
    </div>
        
        <div className='grid grid-cols-3 gap-[32px]'>
            <Card heading="Emergency Care" data="Our Emergency Care service 
            is designed to be your reliable support in critical situations. 
            Whether it's a sudden illness, injury, or any medical concern 
            that requires immediate attention, our team of dedicated 
            healthcare professionals is available 24/7 to provide prompt 
            and efficient care."/>
            <Card heading="Heart Disease" data="Our team of experienced 
            cardiologists and medical experts use state-of-the-art 
            technology to assess your cardiovascular health and design 
            personalized treatment plans. From comprehensive screenings 
            to advanced interventions, we are committed to helping you 
            maintain a healthy heart and lead a fulfilling life."/>
            <Card heading="Dental Care" data="Smile with confidence as our 
            Dental Care services cater to all your oral health 
            needs. Our skilled dentists provide a wide range of 
            treatments, from routine check-ups and cleanings to 
            cosmetic procedures and restorative treatments."/>
        </div>
    </div>
  )
}

export default CardSection