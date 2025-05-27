import Button from './Button'

const ProjectCard = ({ 
      imgSrc,
      label,
      title,
      colSpan }) => {

return (
    <div className={`relative min-h-full w-auto bg-cover bg-center rounded-xl ${colSpan} col-span-full`}>

      <img className="w-full h-[416px] md:h-auto rounded-xl" src={imgSrc} alt={title} />
      
      <div className='w-auto absolute bottom-16 left-8 gap-4 '>
          
            <button className='my-6 px-4 pb-3 pt-4 shadow-xl   rounded-full border border-white hover:border-black/40 bg-white text-black font-medium ' onClick={` hoverscale-105`}>{label}</button>
            <span className="pl-2 md:pl-0 flex sm:text-5xl text-4xl pl font-bold">{title}</span>
      </div>

    </div>
  )
}

export default ProjectCard
