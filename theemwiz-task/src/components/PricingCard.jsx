const PricingCard = ({
    ad,
    name,
    price,
    description ,
    perks ,
    isSelected,
    adClassName,
}) => {

    const perkLabels = ["Brand Design", "Market Analysis", "Production"];

    return(
        <div className={` flex flex-col justify-center items-start border-2 border-[#F3D1BF] rounded-md p-8 gap-8 transition-all duration-300 transform origin-bottom z-10 over ${isSelected ? 'bg-white scale-105 shadow-lg' : "bg-[#FDF0E9]"}`}>
            

        <div className={` ${adClassName} ${isSelected ? "bg-[#EF6D58] text-white rounded-full p-4 pb-3" : "hidden" } `}>{ad}</div>

        <span className="tracking-widest text-xl text-rose-500">{name}</span>

        <span className="flex font-extrabold leading-none md:text-6xl text-4xl ">{price}</span>

        <span className="flex text-wrap leading-10 md:-my-2 text-black/65 text-lg">{description}</span>

        <div className="mt-4 flex flex-col gap-6">
        {perkLabels.map((label, index) => {
          const isIncluded = perks[index];
          return (
            <span
              key={index}
              className={`flex items-center text-lg gap-8 ${isIncluded ? "text-opacity-100" : "text-opacity-60"}`}
            >
              <img
                className="w-5 h-5"
                src={isIncluded ? "./plus.png" : "./minus.png"}
                alt=""
              />
              {label}
            </span>
          );
        })}
      </div>
        


        <button className={`w-auto px-6 pt-5 py-4 font-bold text-shadow-xl rounded-lg transition-colors duration-200 ${isSelected ? "bg-[#EF6D58] text-white" : "bg-white text-black"} `}>CONTACT US</button>

        </div>
    )
}

export default PricingCard;