import { Link } from "react-router-dom";

const StudyPreview = ({ deckId, deckName, totalCards, cardArray}) => {    
    const urlStudy = `/study/studying/${deckId}`
    const urlView = `/decks/view/${deckId}`

    let newCards = 0
    for (const card of cardArray){
        if(card['totalViews'] === 0){
            newCards++
        }
    }
    let forReview = cardArray.length
    let studying = cardArray.length - newCards


    return (
       <div>
            <h3>
                {deckName}
            </h3>
            <span className="w-full text-l my-2 pl-4">
                <Link to={urlStudy}>
                    Study
                </Link>
            </span>
            <span className="w-full text-l my-2 pl-4">
                {newCards} New
            </span>
            <span className="w-full text-l my-2 pl-4">
                {studying} Studying
            </span>
            <span className="w-full text-l my-2 pl-4">
                {`${forReview}/${totalCards} Cards For Review`}
            </span>
            <span className="w-full text-l my-2 pl-4">
                <Link to={urlView}>
                    View Deck
                </Link>
            </span>
       </div> 
  )
}

export default StudyPreview;