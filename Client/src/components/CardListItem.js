import CardButton from './buttons/cardButton'

const CardListItem = ({ cardId, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews, displayThisCard }) => {    
    
    const handleClick = () => {
        displayThisCard(cardId, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews)
    }

    return (
       <div>
            <CardButton 
                type = 'button'
                onClick={handleClick}
                name = {title}
            />
       </div> 
  )
}

export default CardListItem;