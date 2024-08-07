type DashBoardProps = {
    title: string;
    icon: string;
    value: number;
}
const DashBoard = ({ title, icon, value }: DashBoardProps) => {
    return (
        <div className="bg-red-600 w-[165px] h-[100px] flex flex-col rounded-xl gap-2.5">
          <div className="flex justify-between m-2">
          <h3>{title}</h3>
            <img className="w-8 h-8" src={icon} alt="icon" />
          </div>

          <div className="ml-2">
            <p>R${value}</p>  
          </div>
        </div>
    )
}

export default DashBoard;