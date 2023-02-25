import CardButton from './buttons/cardButton'

const CardListItem = ({ cardId, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews, displayThisCard, selected }) => {    
    
    const handleClick = () => {
        displayThisCard(cardId, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews)
    }

    let thisCard
    if(cardId === selected){
        thisCard = true;
    }

    return (
       <div>
            <CardButton 
                type = 'button'
                onClick={handleClick}
                name = {title}
                selected = {thisCard}
            />
       </div> 
  )
}

export default CardListItem;