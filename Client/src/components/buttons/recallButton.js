const RecallButton = ({ weight, type, name, onClick, width, bgColor, bgHover}) => {
    
    return (
      <button type={type} onClick={() => onClick(weight)} className={`${width} flex justify-center items-center text-base p-1 m-1 rounded-md ${bgColor} text-gray-800 ${bgHover} hover:text-white shadow-md`}>
        {name}
      </button>
    )
  }
  
  export default RecallButton;