import React from 'react'

function HeroSection() {
    return (
<>
    <div className='hero-top bg-[#28293E] flex flex-col-reverse md:flex-row text-white font-epilogue px-4 md:px-36 md:pt-24 justify-between'>   
        <div className='hero-left flex flex-col md:gap-10 gap-4 z-10 relative'>
            <img src="./Star.png" alt="star" className='hidden md:flex w-36 h-36 -z-10 top-6 right-24 absolute' />
            <span className='tracking-widest text-base text-rose-500'>
                MODERN STUDIO
            </span>
            <span className='flex md:text-7xl text-6xl font-extrabold leading-none'>We&rsquo;re Help 
                  <br className='md:block hidden'/> To Build Your&nbsp;  
                  <br className='md:block hidden'/>Dream Project
            </span>

            <span className='flex text-wrap leading-10 md:-my-2 text-white/65 '>
                    Agency provides a full service range including technical <br className='md:block hidden'/>skills, design, business understanding.
            </span>
        <div className='flex gap-12 justify-start items-center md:pb-0 pb-8'>
            <button className='flex p-4 pb-3 rounded-md bg-rose-500 text-white font-bold'>HOW WE WORK</button>
            <button >Contact Us</button>
        </div>
    </div>
    <div className='hero-right flex'>
        <img src="./HeroImg01.png" alt="HeroImg01" className='w-auto  md:w-auto '/>
    </div>
</div>

<div className='hero-bottom flex bg-[#28293E] text-white font-epilogue p-4 leading-6 md:px-36 gap-x-4 -mt-1 md:py-10 md:-mt-12 overflow-x-hidden '>
    <img src="./Bitmap.png" alt="user" className='flex w-12 h-12'/>

    <div className='flex flex-col gap-2'>
    <span className='text-white/65 leading-relaxed'>Put themselves in the merchant's shoes.</span>
    <span>Meta Inc.</span>

    </div>
</div>
</>
    )
}

export default HeroSection
