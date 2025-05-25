import { useState }from 'react'
import Button from '../components/Button';
import SectionCard from '../components/SectionCard';
import EmployeeCard from '../components/EmployeeCard';

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
    <div className='bg-[#28293E] text-white font-epilogue w-full h-auto md:px-36 md:py-24 justify-center flex flex-col'>
        
        <div className='flex flex-col justify-center items-center gap-8'>
            
            <span className='tracking-widest text-xl text-rose-500'>PORTFOLIO</span>

            <span className='flex font-extrabold leading-none md:text-7xl text-4xl '>Latest Work</span>
        </div>

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

<div className='w-full grid grid-cols-2 md:grid-cols-12 gap-8 '>
    
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
    </div>

</div>
        <div className='flex w-full justify-center p-16'>
            <button className=' w-fit border border-white/50 font-medium rounded p-4'>Explore More</button>
        </div>

{/* Get Started */}
<div className='relative flex rounded-xl bg-[#FDF0E9] z-1 pl-24 '>


        <div className='flex flex-col pt-24 w-64'>
         <SectionCard 
        title="GET STARTED"
      heading="We Help Companies Move Faster"
      button1="CONTACT US"
      bgImage="./portImg5.5.png" 
      
      headingClassName = "text-xl text-black text-wrap"
      bgImageClassName='left-0 -top-40 '
      subHeadingClassName="hidden md:hidden"
      descriptionClassName = "hidden md:hidden" 
      button1ClassName='px-8'
      button2ClassName='hidden md:hidden'
      button3ClassName='hidden md:hidden'
      wrapperClassName='md:gap-10 gap-4'
        />
    </div>
    
    <div className='flex relative gap-16 items-cenetr z-1 px-12 w-auto'>

    <img src="./portImg5.png" alt=""  className='w-auto flex pt-12'/>


    <div className='relative flex w-96 '>

    <img src="./portImg6.png" alt=""  className='w-auto absolute -bottom-0 z-20'/>

    <img src="./portImg7.png" alt=""  className='w-auto absolute -left-12 z-10'/>
    </div>    
</div>
</div>

{/*  OUR TEAM */}
<div className='flex justify-between items-end'>

    <div className='flex flex-col py-16 justify-start items-start gap-8'>
    
    <span className='tracking-widest text-xl text-rose-500'>OUR TEAM</span>

    <span className='flex font-extrabold leading-none md:text-6xl text-4xl '>Team of Designers<br/> 
and Developers</span>
    </div>

    <div className='flex w-24 h-24 opacity-40  gap-4'>
        <button> <img src='./arrow-left.svg' alt='arrow'/> </button>
        <button> <img src='./arrow-right.svg' alt='arrow'/> </button>
    </div>
</div>

{/* epmloyees about */}
    <div className='flex gap-8 justify-center '>

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
    
    <div className='flex justify-center items-center py-8 gap-4'>
        <button className='border border-orange-400 rounded-full w-2 h-2 bg-orange-400'></button>
        <button className='border border-orange-400 rounded-full w-2 h-2'></button>
        <button className='border border-orange-400 rounded-full w-2 h-2'></button>
    </div>
    
    
    </div>
    )
}

export default PortfolioSection
