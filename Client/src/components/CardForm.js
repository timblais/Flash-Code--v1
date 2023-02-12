import Button from "./buttons/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const CardForm = ({ newCard, editCard, cardId, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews, saveAndRefresh}) => {

    const { user } = useAuth0();
    const [questionValue, setQuestionValue] = useState();
    const [answerValue, setAnswerValue]  = useState();
    const [activeEdit, setActiveEdit] = useState(editCard)
    console.log(activeEdit)

    useEffect(() => {
        setActiveEdit(false)
    }, [cardId])

    const cardSaved = () => {
        saveAndRefresh()
    }
    
    const handleNewSubmit = async () => {
        try{
            const response = await fetch('/card/new', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    'user': user.sub,
                    'deckId': deck,
                    'question': questionValue,
                    'answer': answerValue,
                })
            })
            const data = await response.json()
            console.log(data)
            cardSaved()
            // setEnterNewDeck(false) need to review this to determine how to handle display after submit of new card
            // deckRefresh()
        }catch(err){
            console.log(err)
        }
    }

    const handleEditSubmit = async () => {

    }

    const handleEditResetSubmit = async () => {

    }

    if(newCard === true){
        return(
            <section>
                <form className="flex flex-col justify-start items-center">
                    <div className="flex flex-col justify-start items-center">
                        <label>
                            Question
                        </label>
                        <input name='question' onChange={(e) => setQuestionValue(e.target.value)}>
                        </input>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <label>
                            Answer
                        </label>
                        <input name='answer' onChange={(e) => setAnswerValue(e.target.value)}>
                        </input>
                    </div>
                    <Button
                        type = 'button'
                        name = 'Save'
                        onClick = {handleNewSubmit}
                    />
                </form>
            </section>
        )
    }else if(activeEdit === false){
        return(
            <section>
                <div className="flex flex-col justify-start items-center">
                    <div className="flex flex-col justify-start items-center">
                        <h3>
                            Question
                        </h3>
                        <p>
                            {question}
                        </p>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <h3>
                            Answer
                        </h3>
                        <p>
                            {answer}
                        </p>
                    </div>
                    <Button
                        type = 'button'
                        name = 'Edit'
                        onClick = {() => setActiveEdit(true)}
                    />
                </div>
            </section>
        )
    }else if(activeEdit === true){
        return(
            <section>
                <form className="flex flex-col justify-start items-center">
                    <div className="flex flex-col justify-start items-center">
                        <label>
                            Question
                        </label>
                        <input name='question' value={question} onChange={(e) => setQuestionValue(e.target.value)}>
                        </input>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <label>
                            Answer
                        </label>
                        <input name='answer' value={answer}onChange={(e) => setAnswerValue(e.target.value)}>
                        </input>
                    </div>
                    <Button
                        type = 'button'
                        name = 'Save'
                        onClick = {handleEditSubmit}
                    />
                    <Button
                        type = 'button'
                        name = 'Save and Reset'
                        onClick = {handleEditResetSubmit}
                    />
                </form>
            </section>
        )
    }
}


export default CardForm;