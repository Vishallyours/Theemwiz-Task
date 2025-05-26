import React from 'react'

function ContactSection() {
    return (
        <div className='w-full h-full relative z-1 '>
<img src="./map.png" alt="" className='w-full' />
        
        <div className='form w-96 absolute left-48 top-72'>

        <div className='bg-white rounded-lg p-8 flex flex-col  gap-4 '>
            
            <h2 className='font-bold'>Get In Touch</h2>

            <input className='border-2 rounded-lg p-2 ' type="email" name="Your Email" id="" placeholder='Your email'/>
            <input className='border-2 rounded-lg p-2 ' type="search" name="Subject" id="" placeholder='Subject' />
            <input className='border-2 rounded-lg p-2 pb-16 ' type="text" placeholder='Message' />
            
        <button className='self-end flex w-auto rounded-lg px-6 py-3 bg-rose-500 hover:bg-red-800 text-white font-bold '>SUBMIT NOW</button>
        </div>
        </div>
        
        </div>
    )
}

export default ContactSection
