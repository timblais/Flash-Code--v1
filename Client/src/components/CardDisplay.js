import CardHeader from "./CardHeader";
import CardForm from "./CardForm";

const CardDisplay = ({ newCard, editCard, id, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews}) => {

    if(newCard === true){
        return (
            <section>
                <CardHeader
                    title = 'New Card'
                    dueDate = {new Date()}
                    totalViews = {0}
                />
                <CardForm
                    id = ''
                    deck = {deck}
                    question = ''
                    answer = ''
                    repetitionNumber = {0}
                    easinessFactor = {2.5}
                    repetitionInterval = {1}
                    totalViews = {0}
                /> 
            </section>
        )
    }


    // for edit:

    <CardForm
    id = {id}
    deck = {deck}
    question = {question}
    answer = {answer}
    repetitionNumber = {repetitionNumber}
    easinessFactor = {easinessFactor}
    repetitionInterval = {repetitionInterval}
    totalViews = {totalViews}
/> 
}

export default CardDisplay;