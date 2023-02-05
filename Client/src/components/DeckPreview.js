

const DeckPreview = ({ deckName, totalCards}) => {    
    
    return (
       <div>
            <h3>
                {deckName}
            </h3>
            <span>
                {totalCards}
            </span>
       </div> 
  )
}

export default DeckPreview;