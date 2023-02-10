

const DeckPreview = ({ deckName, totalCards}) => {    
    
    return (
       <div>
            <h3>
                {deckName}
            </h3>
            <span>
                {totalCards} Cards
            </span>
       </div> 
  )
}

export default DeckPreview;