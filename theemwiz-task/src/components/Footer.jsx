import React from 'react'

function Footer() {
    return (
<div className='bg-[#FDF0E9] font-epilogue w-full flex flex-col justify-center items-center  md:px-36'>

{/* upperFooter */}
    <div className='w-full gap-16 py-16 md:px-0 flex flex-col md:flex-row items-center md:items-start justify-between '>

        <span className=' text-2xl font-bold'>Agency</span>
            
{/* Menu */}
        <div className='flex flex-col gap-4 w-full md:w-auto items-center'>
            <span className=' w-full flex justify-center md:justify-start text-lg text-[#EF6D58]'>
                Menu
            </span>
            <ul className='flex flex-col gap-2 w-full justify-center items-center md:items-start'>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
{/* Service  */}
        <div className='flex flex-col gap-4 w-full md:w-auto items-center'>
            <span className='w-full flex justify-center md:justify-start text-lg text-[#EF6D58]'>
              SERVICE
            </span>
            <ul className='flex flex-col gap-2 w-full justify-center  items-center md:items-start '>
                <li>Design</li>
                <li>Development</li>
                <li>Marketing</li>
                <li>See More</li>
            </ul>
        </div>

{/* Socials */}
        <div className='flex gap-2 '> 
            <button className='bg-[#EF6D58] rounded-full w-12 h-12 justify-center items-center flex'>
                <img src="./facebook.png" alt="" className='w-auto h-auto' />
            </button>

            <button className='bg-[#EF6D58] rounded-full w-12 h-12 justify-center items-center flex'>
                <img src="./twitter.png" alt="" className='w-auto h-auto' />
            </button>
            <button className='bg-[#EF6D58] rounded-full w-12 h-12 justify-center items-center flex'>
                <img src="./instagram.png" alt="" className='w-auto h-auto' />
            </button>
        </div>

    </div>

<div className='w-full flex px-16 md:px-0'>
      <hr className='w-full md:w-full border-t border-[#EF6D58]' />
</div>

{/* Copyright */}

<div className='flex flex-col md:flex-row w-auto md:w-full py-8 md:justify-center md:items-center md:content-center'>

      <span className='text-lg text-black/60 py-4  whitespace-pre-line md:whitespace-nowrap text-center md:text-start  '>
        Copyright © 2022 Laaqiq.&#10;
        All Rights Reserved.
      </span>

      <div className='flex w-full justify-between md:justify-end md:px-16 px-8 gap-24 md:gap-16 py-2 md:py-0 text-lg font-medium'>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
      </div>

</div>

</div>
    )
}

export default Footer
