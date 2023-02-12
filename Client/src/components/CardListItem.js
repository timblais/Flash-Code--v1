import Button from './buttons/Button'

const CardListItem = ({ cardId, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews, displayThisCard }) => {    
    
    const handleClick = () => {
        displayThisCard(cardId, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews)
    }

    return (
       <div>
            <Button 
                type = 'button'
                onClick={handleClick}
                name = {title}
            />
       </div> 
  )
}

export default CardListItem;