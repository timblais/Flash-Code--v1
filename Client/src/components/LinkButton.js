import { Link } from "react-router-dom"

const LinkButton = ({ text, link }) => {
    const url = `/${link}`
    
    return (
      <button>
        <Link to={url}>
          {text}
        </Link>
      </button>
    )
  }
  
  export default LinkButton;