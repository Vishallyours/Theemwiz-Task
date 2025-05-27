import { useState } from 'react'
import PricingCard from '../components/PricingCard';

const pricingData = [

    {
    id: 1,
    name: "Consultation",
    price: "Free",
    description: "Your digital marketing efforts, instead of handling in-house." ,
    perks: [true, false, false],
    adClassName: "hidden",
    },
    
    {
    id: 2,
    ad: "Popular",
    name: "Design",
    price: "$1500",
    description: "Provide your business with a variety of digital solutions to promote." ,
    perks: [true, true, false],
    adClassName: "",
    },
    
    {
    id: 3,
    name: "Design+Code",
    price: "$2900",
    description: "Help you hit your marketing goals and grow your business." ,
    perks: [true, true, true],
    adClassName: "hidden",
    },
    

]

function PricingSection() {
    const [selectedId , setSelectedId] = useState(2);

    return (
        <div className='flex flex-col bg-[#FDF0E9] w-full h-auto justify-between font-epilogue px-4 md:px-36 py-12 md:py-24 '>
            
        <div className='flex justify-between items-end'>

    <div className='flex flex-col py-16  justify-start items-start gap-8'>
    
    <span className='tracking-widest text-xl text-rose-500'>PRICING</span>

    <span className='flex font-extrabold leading-none md:text-6xl text-4xl whitespace-pre-line '>Check Our &#10;
Pricing Plans</span>
    </div>

</div>

<div className='flex md:flex-row flex-col md:h-96 md:mt-56 justify-center items-end gap-4'>

    {pricingData.map((card) => (
        <div className='relative' key={card.id} onClick={() => setSelectedId(card.id)}>
            <PricingCard 
            {...card}
            isSelected={card.id === selectedId }
            /> 
        </div>
    ))}
</div>

        </div>
    )
}

export default PricingSection
