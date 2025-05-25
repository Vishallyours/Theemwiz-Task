import SectionCard from "../components/SectionCard"

function AboutSection() {
    return (
    <>
        <div className='bg-[#FDF0E9] w-full h-auto justify-between  font-epilogue'>
            <ul className="flex md:gap-4 gap-10 w-full flex-wrap h-auto md:p-16 p-10 justify-around items-center">
                 <img src='./brand1.png' alt='' className="flex md:w-24  h-auto"></img>
                 <img src='./brand2.png' alt='' className="flex md:w-24 h-auto"></img>
                 <img src='./brand3.png' alt='' className="flex md:w-24 h-auto"></img>
                 <img src='./brand4.png' alt='' className="flex md:w-24 h-auto"></img>
                 <img src='./brand5.png' alt='' className="flex md:w-24 h-auto"></img>
            </ul>
           
            <hr className='md:w-auto md:mx-36 mx-12 border border-[#F3D1BF] '/>
            
            <div className="flex md:flex-row flex-col md:gap-24 gap-4 w-auto md:px-36 p-4 md:py-24 pt-12 justify-between">
                <img src="./AboutOne.png" alt="" className="w-auto"/>

               <div className="md:py-12 py-0">
                <SectionCard 
                title="ABOUT"
                heading="An Experience Design Agencys"
                subHeading="Provides a full service range"
                description="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
                button2="ABOUT US"
                
                headingClassName="md:text-6xl text-5xl"
                descriptionClassName="text-black"
                bgImageClassName="md:hidden hidden"
                button1ClassName="md:hidden hidden"
                button3ClassName="md:hidden hidden"
                wrapperClassName="md:gap-8"
                />
                </div>
            
            </div>
            <ul className="flex md:flex-row flex-col md:px-36 px-4 justify-around ">
                <li className="flex flex-col gap-4 text-lg border-2 md:border-r-0 border-b-0 sm:border-b-2 border-[#F3D1BF] w-full p-10">
                    <span className="text-5xl font-bold">42%</span>
                    <span>Years of experience </span>
                </li>
                <li className="flex flex-col gap-4 text-lg border-2 border-[#F3D1BF] w-full p-10">
                    <span className="text-5xl font-bold">73+</span>
                    <span>Agency members</span>
                </li>
                <li className="flex flex-col gap-4 text-lg border-2 md:border-l-0 border-t-0 sm:border-t-2  border-[#F3D1BF] w-full p-10">
                    <span className="text-5xl font-bold">5.000</span>
                    <span>Projects complete</span>
                </li>
            </ul>

    <div className="about-bottom flex md:flex-row flex-col md:gap-10 w-auto md:px-36 px-4 pt-24 gap-0 justify-between">
              
        <SectionCard
        title="HOW WE WORK"
        heading="Making Your Projects Look Awesome"
        description="Technical skills, design, business understanding, ability to put themselves in the merchant's shoes."
        button3="Read More"
        
        descriptionClassName="md:text-base"
        headingClassName="md:text-4xl text-5xl whitespace-preline "
        subHeadingClassName="md:hidden hidden"
        bgImageClassName="md:hidden hidden"
        button1ClassName="md:hidden hidden"
        button2ClassName="md:hidden hidden"
        wrapperClassName="md:gap-8"
        />

        <ul className="font-epilogue w-full flex md:px-36 md:py-16 px-4 items-center md:gap-20 gap-8 font-bold">
                
            <li className="li-1 flex flex-col text-7xl gap-12">
                <span className="flex w-auto">1</span>
                <span className="flex w-auto">2</span>
                <span className="flex w-auto">3</span>
            </li>

            <li className="li-2 flex flex-col h-full w-full md:text-xl  text-2xl md:gap-20 gap-16 justify-around py-16">
                <span>Full service range including</span>
                <span>Technical skills, design, business</span>
                <span>Themselves in the merchant's</span>
            </li>

        </ul>        
    </div>

    <hr className='md:w-auto md:mx-36 mx-12 border border-[#F3D1BF] '/>

    <div className="flex md:flex-row flex-col md:gap-24 gap-4 w-auto md:px-36 px-4 py-24 md:py-24 justify-between " >

       <div className="flex w-full relative justify-center items-center"> 

            <video className="flex w-full h-auto relative z-1 justify-center items-center" 
            poster="./videoBg.png"
            controls={true}/>
        
            <img className="absolute z-10 flex items-center justify-center" src="./play.svg"/>
        
        </div>
        
        <div className="flex gap-4 md:gap-10 ">

        <SectionCard 
        title="VIDEO REEL"
        heading="Unlock The Greatest Value Possible"
        description="Design, business understanding, ability to put themselves in the merchant's shoes meant to partner."
        
        
        headingClassName="md:text-4xl text-5xl"
        subHeadingClassName="md:hidden hidden"
        button1ClassName="md:hidden hidden"
        button2ClassName="md:hidden hidden"
        button3ClassName="md:hidden hidden"
        bgImageClassName="md:hidden hidden"
        wrapperClassName = "md:gap-4 py-4 md:py-0"
        
        />
        </div>

    </div>
</div>
    </>
    )
}

export default AboutSection
