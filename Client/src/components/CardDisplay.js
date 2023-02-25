import CardHeader from "./CardHeader";
import CardForm from "./CardForm";

const CardDisplay = ({ newCard, editCard, savedCard, cardId, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews, saveAndRefresh}) => {

    if(savedCard){
        return(
            <div>
                <h2>Card Saved!</h2>
            </div>
        )
    }else if(newCard === true){
        return (
            <section className="w-full h-full flex flex-col justify-start items-center">
                <CardHeader
                    title = 'New Card'
                    dueDate = {'today'}
                    totalViews = {0}
                />
                <CardForm
                    cardId = ''
                    deck = {deck}
                    question = ''
                    answer = ''
                    repetitionNumber = {0}
                    easinessFactor = {2.5}
                    repetitionInterval = {1}
                    totalViews = {0}
                    newCard = {true}
                    saveAndRefresh = {saveAndRefresh}
                    
                /> 
            </section>
        )
    }else if(newCard === false){
        return (
            <section className="w-full h-full flex flex-col justify-start items-center">
                <CardHeader
                    title = {title}
                    dueDate = {dueDate}
                    totalViews = {totalViews}
                />
                <CardForm
                    cardId = {cardId}
                    editCard = {editCard}
                    deck = {deck}
                    question = {question}
                    answer = {answer}
                    repetitionNumber = {repetitionNumber}
                    easinessFactor = {easinessFactor}
                    repetitionInterval = {repetitionInterval}
                    totalViews = {totalViews}
                    newCard = {false}
                    saveAndRefresh = {saveAndRefresh}  
                /> 
            </section>
        )
    }

 
}

export default CardDisplay;