
const EmployeeCard = ({
    empName,
    empDezig,
    empImage
}) => {
    return (
        
        <div className="flex flex-col gap-2  w-auto ">
            <div className=" flex justify-center border border-white/40 w-72 h-64 p-4 pb-0">
                <img src={empImage} alt="" />
            </div>
            <span className="text-xl">{empName}</span>
            <span className="text-white-10 text-sm ">{empDezig}</span>

        </div>
    )
}
    
export default EmployeeCard;
