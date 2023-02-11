import Button from "./buttons/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

const CardForm = ({ newCard, editCard, id, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews}) => {

    const { user } = useAuth0();
    const [questionValue, setQuestionValue] = useState();
    const [answerValue, setAnswerValue]  = useState();
    
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
            // setEnterNewDeck(false) need to review this to determine how to handle display after submit of new card
            // deckRefresh()
        }catch(err){
            console.log(err)
        }
    }

    if(newCard === true){
        return(
            <section>
                <form>
                    <div>
                        <label>
                            Question
                        </label>
                        <input name='question' onChange={(e) => setQuestionValue(e.target.value)}>
                        </input>
                    </div>
                    <div>
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
    }
}


export default CardForm;