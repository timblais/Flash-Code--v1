const Button = ({ type, name, onClick }) => {
    
    return (
      <button type={type} onClick={onClick} className="w-28 flex justify-center items-center text-base p-1 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-600 hover:text-white shadow-md">
        {name}
      </button>
    )
  }
  
  export default Button;