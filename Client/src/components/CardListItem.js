import Button from './buttons/Button'

const CardListItem = ({ id, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews, displayThisCard }) => {    
    
    const handleClick = () => {
        displayThisCard(id, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews)
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