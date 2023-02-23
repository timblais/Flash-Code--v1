import { Link } from "react-router-dom"

const NavLink = ({ currentPage, text, link }) => {
    const url = `/${link}`
    
    if(currentPage === text){
      return (
        <span className="flex justify-center items-center text-xl mx-3 px-2 py-1 rounded-lg bg-gray-900 text-white">
          <Link to={url}>
            {text}
          </Link>
        </span>
      )
    }else{
      return (
        <span className="flex justify-center items-center text-xl mx-3 px-2 py-1 rounded-lg hover:bg-gray-600 hover:text-white">
          <Link to={url}>
            {text}
          </Link>
        </span>
      )
    }


  }
  
  export default NavLink