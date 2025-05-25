const Button = ({
btn , 
}) => {

    return (
        <div className="max-w-auto absolute sm:ml-8 sm:-mt-48 flex flex-col gap-8">

        <button className='w-auto flex rounded-3xl bg-white text-black px-4 pt-3 py-2'>{btn}</button>
  
        </div>
    )

}

export default Button;