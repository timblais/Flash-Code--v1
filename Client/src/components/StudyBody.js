import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Highlight from "react-highlight";
import Button from "./buttons/Button";
import RecallBtGroup from './recallBtGroup';
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

const StudyBody = ({ cardArray, updateCardArray}) => {
    const { user, getAccessTokenSilently } = useAuth0();
    const [ showAnswer, setShowAnswer ] = useState('hidden');
    const [ showAnswerButton, setShowAnswerButton ] = useState('flex');
    const [ showRatingButtons, setShowRatingButtons ] = useState('hidden');
    const [ userAnswer, setUserAnswer] = useState('');

    let card = cardArray[0]

    useEffect(() => {
        setShowAnswer('hidden')
        setShowAnswerButton('flex')
        setShowRatingButtons('hidden')
    }, [cardArray])

    const showAnswerRatings = () => {
        setShowAnswer('flex')
        setShowAnswerButton('hidden')
        setShowRatingButtons('flex')
    }

    const updateCard = async (n, I, EF, nextDue) => {
        card['dueDate'] = new Date(nextDue)
        card['repetitionNumber'] = n
        card['easinessFactor'] = EF
        card['repetitionInterval'] = I
        card['totalViews']++
    }

    const updateCardInDB = async () => {
        try {
            const accessToken = await getAccessTokenSilently()
            const response = await fetch(`/card/updateRating`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({
                    'cardId': card['_id'],
                    'dueDate': card['dueDate'],
                    'repetitionNumber': card['repetitionNumber'],
                    'easinessFactor': card['easinessFactor'],
                    'repetitionInterval': card['repetitionInterval'],
                    'totalViews': card['totalViews'],
                })
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const rateCard = async (grade) => {
        let n = card.repetitionNumber
        let I = card.repetitionInterval
        let EF = card.easinessFactor

        // Update EF
        EF = EF + (0.1 - (5-grade) * (0.08 + (5-grade) * 0.02))
        if(EF < 1.3){
            EF = 1.3
        }    

        // Update n and assign I
        if(grade >= 3){
            if(n === 0){
                I = 1
            }else if(n === 1){
                I = 4
            }else{
                I = Math.floor(I * EF)
            }
            n++
        }else{
            n = 0
            I = 1
        }

        let addSeconds
        if(n === 0){
            addSeconds = 600
        }else{
            addSeconds = (86400*I)
        }
        
        let nextDue = Date.now() + addSeconds*1000

        console.log(n, I, EF, addSeconds, nextDue)

        await updateCard(n, I, EF, nextDue)
        await updateCardInDB()

    }

    return(
        <section className="w-full h-9/10 flex flex-col justify-start items-center">
            <div className="w-full h-9/10 flex flex-col justify-start items-center xl:flex-row xl:justify-center xl:items-center">
                {/* Question */}
                <div className="xl:w-5/12 xl:h-95% xl:border-2 xl:m-2 flex flex-col justify-start items-center">
                    {/* <div className="flex flex-col justify-start items-start py-1 px-4"> */}
                        <label className="w-full p-1 rounded-t-md flex justify-center items-center text-lg">
                            Question
                        </label>
                        <div className='w-[500px] h-[190px] overflow-y-auto bg-[#282c34] relative'>
                            <pre className='w-full h-full overflow-y-auto overflow-x-auto bg-[#282c34] whitespace-pre-wrap absolute top-0 left-0 shadow-lg' >
                                <Highlight className="javascript">
                                    {card.question}
                                </Highlight>
                            </pre>
                        {/* </div> */}
                    </div>
                </div>
                {/* Answer */}
                <div className="xl:w-5/12 xl:h-95% xl:border-2 xl:m-2 flex flex-col justify-start items-center">
                    {/* User Answer */}
                        <label className="w-full p-1 rounded-t-md flex justify-center items-center text-lg">
                            Enter Answer
                        </label>
                        <ScrollSync>
                            <div className='w-[500px] h-[190px] overflow-y-auto bg-[#282c34] relative'>
                                <ScrollSyncPane>
                                    <pre className='w-full h-full overflow-y-auto overflow-x-auto bg-[#282c34] whitespace-pre-wrap absolute top-0 left-0' >
                                        <Highlight className="javascript">
                                            {userAnswer}
                                        </Highlight>
                                    </pre>
                                </ScrollSyncPane>
                                <ScrollSyncPane>
                                        <pre className='w-full h-full overflow-y-auto overflow-x-hidden p-2 font-mono whitespace-pre-wrap break-words absolute top-0 left-0 text-transparent bg-transparent
                                        caret-gray-200' contenteditable='true' name='answer' defaultValue='' onInput={(e) => {
                                        setUserAnswer(e.target.innerText)
                                        }}>
                                        </pre>
                                </ScrollSyncPane>
                            </div>
                        </ScrollSync>
                    {/* Card Answer */}
                    <div className={`${showAnswer} flex-col justify-start items-start p-1`}>
                        <label className="w-full p-1 rounded-t-md flex justify-center items-center text-lg">
                            Correct Answer
                        </label>
                        <div className='w-[500px] h-[190px] overflow-y-auto bg-[#282c34] relative'>
                            <pre className='w-full h-full overflow-y-auto overflow-x-auto bg-[#282c34] whitespace-pre-wrap absolute top-0 left-0' >
                                <Highlight className="javascript">
                                    {card.answer}
                                </Highlight>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
                    
                <Button
                    type = 'button'
                    name = 'Show Answer'
                    onClick= {showAnswerRatings}
                    width = 'w-28'
                    display = {showAnswerButton}
                />
                <RecallBtGroup
                    display={showRatingButtons}
                    onclick={rateCard}
                />
        </section>
    )
};

export default StudyBody;