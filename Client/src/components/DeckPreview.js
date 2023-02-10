import { Link } from "react-router-dom";

const DeckPreview = ({ id, deckName, totalCards}) => {    
    const url = `/study/view/${id}`
    return (
       <div>
            <h3>
                {deckName}
            </h3>
            <span>
                {totalCards} Cards
            </span>
            <span className="w-full text-l my-2 pl-4">
                <Link to={url}>
                    View/Edit
                </Link>
            </span>
       </div> 
  )
}

export default DeckPreview;