import SectionCard from "../components/SectionCard"

function AboutSection() {
    return (
    <>
        <div className='bg-[#FDF0E9] w-full h-auto justify-between '   >
            <ul className="flex gap-4 p-16 justify-around items-center">
                 <img src='./brand1.png' alt='' className="w-24 h-auto"></img>
                 <img src='./brand2.png' alt='' className="w-24 h-auto"></img>
                 <img src='./brand3.png' alt='' className="w-24 h-auto"></img>
                 <img src='./brand4.png' alt='' className="w-24 h-auto"></img>
                 <img src='./brand5.png' alt='' className="w-24 h-auto"></img>
            </ul>
            <hr className='w-auto mx-36 border border-[#F3D1BF] '/>

            <div className="flex gap-10 w-auto px-36 justify-between">
                <img src="./AboutOne.png" alt="" className="w-auto"/>
                <SectionCard 
                title="ABOUT"
                heading="An Experience Design Agencys"
                subHeading="Provides a full service range"
                description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
                button2="ABOUT US"
                
                bgImageClassName="md:hidden"
                descriptionClassName="text-black/65"
                button1ClassName="hidden"
                button3ClassName="hidden"
                />
            </div>
        </div>
    </>
    )
}

export default AboutSection
