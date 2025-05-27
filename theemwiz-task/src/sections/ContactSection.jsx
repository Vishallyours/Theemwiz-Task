import Footer from '../components/Footer'

function ContactSection() {
    return (
    <div className='flex flex-col-reverse md:flex-row bg-[#FDF0E9] font-epilogue w-full h-full relative z-1 gap-6'>
        
        <img src="./map.png" alt="" className='w-full' />
        
        <div className='form w-auto px-4 shadow-sm md:w-96 md:absolute md:left-48 md:top-72'>

        <div className='bg-white rounded-lg py-16 md:p-8 flex flex-col   p-12 gap-6 md:gap-4  '>
            
            <h2 className='text-2xl font-bold'>Get In Touch</h2>

            <input className='border-2 rounded-lg p-2 placeholder-black/70' type="email" name="Your Email" id="" placeholder='Your email'/>

            <select className='border-2 rounded-lg p-2' type="search" name="Subject" disabled  id="">
            <option value="Subject">Subject</option>
            </select>

            <input className='border-2 rounded-lg p-2 pb-16 placeholder-black/70' type="text" placeholder='Message' />
            
        <button className='self-end flex w-auto rounded-lg px-6 pt-4 pb-3 bg-rose-500 hover:bg-red-800 text-white font-bold '>SUBMIT NOW</button>
        </div>
        </div>
        
        </div>
    )
}

export default ContactSection
