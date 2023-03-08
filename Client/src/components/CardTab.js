
const CardTab = ({name, onClick, display }) => {
    

    if(display === name){
        return(
            <button onClick={onClick} className={`flex justify-center items-center text-md w-1/4 h-8 mx-2 rounded-t-md bg-gray-800 text-white`}>
                {name}
            </button>
        )
    }else{
        return(
            <button onClick={onClick} className={`flex justify-center items-center text-md w-1/4 h-8 mx-2 rounded-t-md hover:bg-gray-800 hover:text-white bg-gray-600 text-gray-200`}>
                {name}
            </button>
        )
    }
    

};

export default CardTab;