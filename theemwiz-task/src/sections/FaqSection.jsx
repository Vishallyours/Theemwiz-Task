import React from 'react'
import SectionCard from "../components/SectionCard"
import Questions from '../components/Questions'

function FaqSection() {
    return (
        <div className='flex flex-col md:flex-row bg-[#FDF0E9] w-full h-auto justify-between font-epilogue px-4 md:px-36 md:pt-8 py-16 '>
            
            <SectionCard 
            title="FAQ"
            heading="Frequently Asked Questions"
            description="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
            button3="Contact US"
            
            headingClassName='text-5xl md:7xl'
            bgImageClassName='hidden md:hidden'
            subHeadingClassName='hidden md:hidden'
            button1ClassName='hidden md:hidden'
            button2ClassName='hidden md:hidden'
            />
<div className='flex flex-col w-full gap-0 p-0 m-0'>

          <Questions defaultOpen="true" ques="A digital agency is a business" wrapperClassName="rounded-t-lg border-b-0"/>
          <Questions ques="Hire to outsource your digital" wrapperClassName="border-b-0" />
          <Questions ques="Marketing efforts" wrapperClassName="border-b-0"/>
          <Questions ques="Can provide your business" wrapperClassName="rounded-b-lg" />
</div>

        </div>
    )
}

export default FaqSection
