
const SectionCard = ({
    title ,
    heading ,
    subHeading ,
    description ,
    button1 ,
    button2 ,
    button3 , 
    bgImage , 
    headingClassName = "",
    subHeadingClassName = "" ,
    descriptionClassName = "" ,
    button1ClassName = "" ,
    button2ClassName = "" ,
    button3ClassName = "" , 
    bgImageClassName = "" , 
    
        }) => {
    return (
<div className='hero-left flex flex-col md:gap-10 gap-4 z-10 relative'>
            <img src={bgImage}alt="star" className={`hidden md:flex w-36 h-36 -z-10 top-6 right-24 absolute ${bgImageClassName}`} />
            <span className={`tracking-widest text-base text-rose-500`}>
                {title}
            </span>
            <span className={`flex md:text-7xl text-6xl font-extrabold leading-none ${headingClassName}`}>{heading}
            </span>
                <span className={`flex text-xl ${subHeadingClassName}`}>{subHeading}</span>
            <span className={`flex text-wrap leading-10 md:-my-2 text-white/65 ${descriptionClassName}`}>{description}</span>
        <div className='flex gap-12 justify-start items-center md:pb-0 pb-8'>
            <button className={`flex p-4 pb-3 rounded-md bg-rose-500 text-white font-bold ${button1ClassName}`}>{button1}</button>

            <button className={`flex shadow-md p-4 pb-3 rounded-md bg-white text-black font-bold${button2ClassName}`}>{button2}</button>
            
            <button className={`${button3ClassName}`}>{button3}</button>
        </div>
    </div>

    );
}

export default SectionCard;