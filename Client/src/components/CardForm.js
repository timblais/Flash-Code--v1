import Button from "./buttons/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const CardForm = ({ newCard, editCard, cardId, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews, saveAndRefresh}) => {

    const { user } = useAuth0();
    const [questionValue, setQuestionValue] = useState();
    const [answerValue, setAnswerValue]  = useState();
    const [activeEdit, setActiveEdit] = useState(editCard)

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
        }catch(err){
            console.log(err)
        }
    }

    const handleEditSubmit = async () => {
        try{
            const response = await fetch('/card/edit', {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    'cardId': cardId,
                    'question': questionValue,
                    'answer': answerValue,
                })
            })
            const data = await response.json()
            console.log(data)
            cardSaved()
        }catch(err){
            console.log(err)
        }
    }

    const handleEditResetSubmit = async () => {
        try{
            const response = await fetch('/card/editReset', {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    'cardId': cardId,
                    'question': questionValue,
                    'answer': answerValue,
                })
            })
            const data = await response.json()
            console.log(data)
            cardSaved()
        }catch(err){
            console.log(err)
        }
    }

    const handleCancelSubmit = async () => {

    }

    const handleDeleteSubmit = async () => {
        try{
            const response = await fetch('/card/delete', {
                method: 'DELETE',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    'deckId': deck,
                    'cardId': cardId,
                })
            })
            const data = await response.json()
            console.log(data)
            cardSaved()
        }catch(err){
            console.log(err)
        }
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
                        <pre>
                            <textarea name='answer' onChange={(e) => setAnswerValue(e.target.value)}>
                            </textarea>
                        </pre>
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
                        <pre>
                            {answer}
                        </pre>
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
                        <input name='question' defaultValue={question} onChange={(e) => setQuestionValue(e.target.value)}>
                        </input>
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <label>
                            Answer
                        </label>
                        <pre>
                            <textarea contenteditable='true' name='answer' defaultValue={answer}onChange={(e) => setAnswerValue(e.target.value)}>
                            </textarea>
                        </pre>
                    </div>
                    <Button
                        type = 'button'
                        name = 'Cancel'
                        onClick = {handleCancelSubmit}
                    />
                    <Button
                        type = 'button'
                        name = 'Save and Keep Stats'
                        onClick = {handleEditSubmit}
                    />
                    <Button
                        type = 'button'
                        name = 'Save and Reset Card'
                        onClick = {handleEditResetSubmit}
                    />
                    <Button
                        type = 'button'
                        name = 'Delete Card'
                        onClick = {handleDeleteSubmit}
                    />
                </form>
            </section>
        )
    }
}


export default CardForm;