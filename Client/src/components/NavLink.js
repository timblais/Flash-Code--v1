import { Link } from "react-router-dom"

const NavLink = ({ text, link }) => {
    const url = `/${link}`
    
    return (
      <span className="w-full text-xl my-2 pl-4">
        <Link to={url}>
          {text}
        </Link>
      </span>
    )
  }
  
  export default NavLink