const CardButton = ({ type, name, onClick }) => {
    
    return (
      <button type={type} onClick={onClick} className="w-28 flex justify-start items-center text-base my-2 p-1 rounded-sm   hover:bg-gray-200 hover:font-bold border-2 border-slate-300 shadow-md" >
        {name}
      </button>
    )
  }
  
  export default CardButton;