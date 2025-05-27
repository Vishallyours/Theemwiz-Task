import { useState }from 'react'
import Button from '../components/Button';
import SectionCard from '../components/SectionCard';
import EmployeeCard from '../components/EmployeeCard';
import ProjectCard from '../components/ProjectCard';

function PortfolioSection() {

const [selectedCategory , setSelectedCategory] = useState('Show All');

  const categories = [
    { name: 'Show All', count: 14 },
    { name: 'Design', count: 6 },
    { name: 'Branding', count: 4 },
    { name: 'Illustration', count: 3 },
    { name: 'Motion', count: 1 },
  ];

    return (
  <div className='bg-[#28293E] text-white font-epilogue w-full h-auto md:px-36 md:py-24 py-12 justify-center flex flex-col'>

{/*Titile  */}
      <div className='flex flex-col justify-center items-center gap-8'>
            
            <span className='tracking-widest text-xl text-rose-500'>PORTFOLIO</span>

            <span className='flex font-extrabold leading-none md:text-7xl text-5xl '>Latest Work</span>
        </div>
{/*Desktop view Buttons */}
       <ul className='hidden w-full md:flex flex-wrap gap-24 py-16 justify-center items-center text-base'>
        {categories.map((category) => (
          <li key={category.name} className='flex gap-0.5'>
            <button
              onClick={() => setSelectedCategory(category.name)}
              className={
                selectedCategory === category.name
                  ? 'text-white'
                  : 'text-white/50'
              }
            >
              {category.name}
            </button>
            <span className='flex text-xs text-white/50 -mt-1'>{category.count}</span>
          </li>
        ))}
      </ul>

{/* mobile view Select */}
    <div className='flex items-center justify-between w-auto md:hidden mx-4 my-8 px-6 py-4 rounded-lg bg-white text-black/50 text-base '> 
Show All 
<img src="./downMenu.svg" className='opacity-30 w-4 h-4' alt="" />
    </div>

{/* PRojects  */}
    <div className='w-full flex flex-col px-4 md:px-0 md:grid md:grid-cols-12 gap-4 '>
 <ProjectCard
    imgSrc="/portImg1.png"
    label="Design"
    title="SOFA"
    colSpan="md:col-span-5"
  />
  <ProjectCard
    imgSrc="/portImg2.png"
    label="Branding"
    title="KeyBoard"
    colSpan="md:col-span-7"
  />
  <ProjectCard
    imgSrc="/portImg3.png"
    label="Illustrator"
    title="Work Media"
    colSpan="md:col-span-7"
  />
  <ProjectCard
    imgSrc="/portImg4.png"
    label="Motion"
    title="DDDONE"
    colSpan="md:col-span-5 hidden md:flex"
  />

{/*     
    <div className='relative min-h-full w-auto md:col-span-5 col-span-full'>
        <img className="md:w-full w-auto rounded-xl" src="./portImg1.png" alt=""/>
        <Button btn="Design" />   
        <span className="absolute bottom-16 left-8 flex sm:text-5xl font-bold">SOFA</span>
        
    </div>
    
    <div className='relative md:min-h-full min-h-[416px] w-auto md:col-span-7 col-span-full'>
        <img className='md:w-full w-auto rounded-xl' src="./portImg2.png" alt="" />
        <Button btn="Branding"/>
        <span className="absolute bottom-16 left-8 flex sm:text-5xl font-bold">KeyBoard</span>    
    </div>
        
    <div className='relative min-h-full w-auto md:col-span-7 col-span-full '> 
        <img className="md:w-full w-auto rounded-xl" src="./portImg3.png" alt="" />
       <Button btn="Illustrator"  />
        <span className="absolute bottom-16 left-8 flex sm:text-5xl font-bold">Work Media</span> 
    </div>
    
    <div className='relative min-h-full w-auto md:col-span-5 col-span-full'> 
        <img className="w-full rounded-xl" src="./portImg4.png" alt="" />
        <Button btn="Motion"/>
        <span className="absolute bottom-16 left-8 flex sm:text-5xl font-bold">DDDONE</span>
    </div> */}

    </div>
    
    <div className='flex w-full justify-center p-16'>
            <button className=' w-fit border border-white/50 font-medium rounded p-4'>Explore More</button>
    </div>

{/* Get Started */}
<div className='relative flex flex-col md:flex-row rounded-xl bg-[#FDF0E9] z-1 md:pl-24 m-4 md:m-0'>x

        <img src="./portImg5.5.png" alt="" className='w-36 h-36  absolute left-2 md:left-24 -top-20'/>

        <div className='flex flex-col pt-24 md:pt-24 px-6 md:py-4 w-auto'>
         <SectionCard 
        title="GET STARTED"
      heading="We Help Companies &#10; Move Faster"
      button1="CONTACT US"
      bgImage="./portImg5.5.png" 
      
      headingClassName = "text-xl text-black whitespace-pre-line leading-relaxed "
      bgImageClassName='hidden md:hidden '
      subHeadingClassName="hidden md:hidden"
      descriptionClassName = "hidden md:hidden" 
      button1ClassName='px-8'
      button2ClassName='hidden md:hidden'
      button3ClassName='hidden md:hidden'
      wrapperClassName='md:gap-10 gap-4'
        />
    </div>
    
  <div className='flex flex-col md:flex-row w-full md:w-auto relative md:gap-4 gap-4 justify-evenly items-center z-1 '>

     <img src="./portImg5.png" 
          alt=""  
          className=' md:w-auto  md:py-0 md:pt-12'
      />
     
     <div className='md:relative flex flex-col md:flex-row items-center md:w-96 w-full'>

          <img src="./portImg6.png" 
               alt=""  
               className='w-auto md:absolute md:left-16 md:-top-60 md:mt-3  z-20'/>

          <img src="./portImg7.png" alt=""  
               className='w-auto absolute top-96 left-6 md:-top-24 md:left-2 z-10'/>
    </div>    
</div>
</div>

{/*  OUR TEAM */}
<div className='flex justify-between items-end px-4 md:px-0'>

    <div className='flex flex-col py-16 justify-start items-start gap-8'>
    
    <span className='tracking-widest text-xl text-rose-500'>OUR TEAM</span>

    <span className='flex font-extrabold md:leading-none md:text-6xl text-5xl leading-tight '>Team of Designers<br/> 
and Developers</span>
    </div>
{/* arrow Buttons <- _-> */}
    <div className='hidden md:flex w-24 h-24 opacity-40  gap-4'>
        <button> <img src='./arrow-left.svg' alt='arrow'/> </button>
        <button> <img src='./arrow-right.svg' alt='arrow'/> </button>
    </div>
</div>

{/* epmloyees about */}
    <div className='flex gap-8 md:justify-center justify-start px-4 overflow-x-clip md:overflow-x-visible '>

    <EmployeeCard
    empImage="employee1.png"
    empName="Azah Anyeni"
    empDezig="Designer"
    />

    <EmployeeCard
    empImage="employee2.png"
    empName="Roelof Bekkenenks"
    empDezig="React Developer"
    />

    <EmployeeCard
    empImage="employee3.png"
    empName="Leonardo Oliveira"
    empDezig="Illustrator"
    />

    <EmployeeCard
    empImage="employee4.png"
    empName="Izabella Tabakova"
    empDezig="Product Designer"
    />
    </div>
  {/* pointer dots */}
  
  <div className='flex justify-center items-center py-8 gap-4'>
      
{/** desktop view : 3 dots */}
<div className="hidden md:flex gap-2">
  {[0, 1, 2].map((i) => (
    <button
      key={i}
      className={`border border-orange-400 rounded-full mx-2 w-3 h-3 ${i === 0 ? 'bg-orange-400' : ''}`}
    />
  ))}
</div>

{/** Mobile (< md): 6 dots */}
<div className="flex md:hidden gap-2">
  {Array.from({ length: 6 }).map((_, i) => (
    <button
      key={i}
      className={`border border-orange-400 rounded-full w-2 h-2 ${i === 0 ? 'bg-orange-400' : ''}`}
    />
  ))}
</div>
    </div>
    
    
    </div>
    )
}

export default PortfolioSection
