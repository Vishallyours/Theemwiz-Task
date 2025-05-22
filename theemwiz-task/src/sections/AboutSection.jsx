import SectionCard from "../components/SectionCard"

function AboutSection() {
    return (
    <>
        <div className='bg-[#FDF0E9] w-full h-auto justify-between  font-epilogue'   >
            <ul className="flex gap-4 p-16 justify-around items-center">
                 <img src='./brand1.png' alt='' className="w-24 h-auto"></img>
                 <img src='./brand2.png' alt='' className="w-24 h-auto"></img>
                 <img src='./brand3.png' alt='' className="w-24 h-auto"></img>
                 <img src='./brand4.png' alt='' className="w-24 h-auto"></img>
                 <img src='./brand5.png' alt='' className="w-24 h-auto"></img>
            </ul>
            <hr className='w-auto mx-36 border border-[#F3D1BF] '/>

            <div className="flex gap-10 w-auto px-36 py-24 justify-between">
                <img src="./AboutOne.png" alt="" className="w-auto"/>

               <div className="py-12">
                <SectionCard 
                title="ABOUT"
                heading="An Experience Design Agencys"
                subHeading="Provides a full service range"
                description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
                button2="ABOUT US"
                
                headingClassName="md:text-6xl"
                descriptionClassName="text-black"
                bgImageClassName="md:hidden hidden"
                button1ClassName="md:hidden hidden"
                button3ClassName="md:hidden hidden"
                wrapperClassName="md:gap-8"
                />
                </div>
            
            </div>
            <ul className="flex px-36 justify-around ">
                <li className="flex flex-col gap-4 text-lg border-2 border-r-0 border-[#F3D1BF] w-full p-10">
                    <span className="text-5xl font-bold">42%</span>
                    <span>Years of experience </span>
                </li>
                <li className="flex flex-col gap-4 text-lg border-2 border-[#F3D1BF] w-full p-10">
                    <span className="text-5xl font-bold">73+</span>
                    <span>Agency members</span>
                </li>
                <li className="flex flex-col gap-4 text-lg border-2 border-l-0 border-[#F3D1BF] w-full p-10">
                    <span className="text-5xl font-bold">5.000</span>
                    <span>Projects complete</span>
                </li>
            </ul>

    <div className="about-bottom flex gap-10 w-auto px-36 py-24 justify-between">
              
        <SectionCard
        title="HOW WE WORK"
        heading="Making Your Projects Look Awesome"
        description="Technical skills, design, business understanding, ability to put themselves in the merchant's shoes."
        button3="Read More"
        
        descriptionClassName="md:text-base"
        headingClassName="md:text-4xl"
        subHeadingClassName="md:hidden hidden"
        bgImageClassName="md:hidden hidden"
        button1ClassName="md:hidden hidden"
        button2ClassName="md:hidden hidden"
        wrapperClassName="md:gap-8"
        />

        <ul className="font-epilogue w-full flex px-36 py-16 items-center gap-20 font-bold">
                
            <li className="li-1 flex flex-col text-7xl gap-12">
                <span className="flex w-auto">1</span>
                <span className="flex w-auto">2</span>
                <span className="flex w-auto">3</span>
            </li>

            <li className="li-2 flex flex-col h-full w-full text-xl gap-20 justify-around py-16">
                <span>Full service range including</span>
                <span>Technical skills, design, business</span>
                <span>Themselves in the merchant's</span>
            </li>

        </ul>        
    </div>

    <hr className='w-auto mx-36 border border-[#F3D1BF] '/>

    <div className="flex gap-10 w-auto px-36 py-24 justify-between">
        <div className="">Video</div>
        <div className="flex gap-4">

        <SectionCard 
        title="VIDEO REEL"
        heading="Unlock The Greatest Value Possible"
        description="Design, business understanding, ability to put themselves in the merchant's shoes meant to partner."
        
        
        headingClassName="md:text-5xl"
        subHeadingClassName="md:hidden hidden"
        button1ClassName="md:hidden hidden"
        button2ClassName="md:hidden hidden"
        button3ClassName="md:hidden hidden"
        bgImageClassName="md:hidden hidden"
        wrapperClassName = "md:gap-4"
        
        />
        </div>

    </div>        
</div>
    </>
    )
}

export default AboutSection
