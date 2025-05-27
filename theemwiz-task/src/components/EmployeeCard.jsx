
const EmployeeCard = ({
    empName,
    empDezig,
    empImage
}) => {
    return (
        
        <div className="flex flex-col gap-2  w-auto ">
            <div className=" flex justify-center rounded-lg border border-white/40 w-64 h-64 py-4 pb-0">
                <img src={empImage} alt="" />
            </div>
            <span className="pt-4 text-2xl font-bold">{empName}</span>
            <span className="text-white/50 text-base ">{empDezig}</span>

        </div>
    )
}
    
export default EmployeeCard;
