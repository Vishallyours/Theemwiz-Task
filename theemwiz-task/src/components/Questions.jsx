import { useState } from "react";

const Questions = ({ques , wrapperClassName ,defaultOpen = false}) => {
    
const [isOpen, setIsOpen] = useState(defaultOpen);


return(
      <div className='w-full flex flex-col '>
             
                <div className={`flex flex-col border-2 border-[#F3D1BF] gap-4 mx-0 md:mx-16 p-6 items-start justify-between ${wrapperClassName} ${isOpen ? 'bg-white' : ''}`}>
                                     
                 <div className="flex w-full justify-between">
                    <span className='flex text-lg font-bold'>{ques}</span> 
                    <img src="./down.png" alt="" className={`w-8 h-8 transform transition-transform duration-300 ${isOpen? "rotate-180": ""}`} onClick={() => setIsOpen(!isOpen)} />
                 </div>
                   
                   <span className={`flex text-wrap leading-relaxed text-black/65 text-lg ${isOpen ? "flex" : "hidden"}`}>Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.</span>

                </div>

            </div>

)
}
export default Questions;