import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Highlight from "react-highlight";
import Button from "./buttons/Button";
import RecallBtGroup from './recallBtGroup';
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import StudyCardTabHeader from "./StudyCardTabHeader";

const StudyBody = ({ cardArray, updateCardArray}) => {
    const { user, getAccessTokenSilently } = useAuth0();
    const [ tabDisplay, setTabDisplay ] = useState('Question')
    const [ showRatingButtons, setShowRatingButtons ] = useState('hidden');
    const [ userAnswer, setUserAnswer] = useState('');
    const [ userAnswerOverlay, setUserAnswerOverlay ]= useState('');

    let card = cardArray[0]
    let remainingCards = [...cardArray]

    useEffect(() => {
        setTabDisplay('Question')
        setUserAnswer('')
        setShowRatingButtons('hidden')
    }, [cardArray])

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
            addSeconds = (86400*I) // seconds per day
        }
        
        let nextDue = Date.now() + addSeconds*1000 // convert to milliseconds

        console.log(n, I, EF, addSeconds, nextDue)

        await updateCard(n, I, EF, nextDue)
        await updateCardInDB()

        let tomorrow = new Date()
        tomorrow.setHours(24,0,0,0)
        remainingCards.shift()
        if(nextDue < tomorrow){
            remainingCards.push(card)
        }
        updateCardArray(remainingCards)

    }

    const displayQuestion = () => {
        setTabDisplay('Question')
    }

    const displayUserAnswer = () => {
        setTabDisplay('Enter Answer')
        setUserAnswerOverlay(userAnswer)
    }

    const displayAnswer = () => {
        setTabDisplay('Show Answer')
        setShowRatingButtons('flex')
    }

    if(tabDisplay === 'Question'){
        return(
            <section className="w-full h-9/10 flex flex-col justify-start items-center">
                <div className="w-full h-9/10 flex flex-col justify-start items-center">
                    {/* Question */}
                    <StudyCardTabHeader 
                         display={tabDisplay}
                         showQuestion={displayQuestion}
                         showAnswer={displayAnswer}
                         enterAnswer={displayUserAnswer}               
                    />
                    <div className="sm:w-[625px] sm:h-95% sm:border-4 sm:border-gray-800 sm:mx-2 flex flex-col justify-start items-center">
                        <div className='sm:w-[600px] h-[400px] m-2 overflow-y-auto bg-[#282c34] relative'>
                            <pre className='w-full h-full overflow-y-auto overflow-x-auto bg-[#282c34] whitespace-pre-wrap absolute top-0 left-0 shadow-lg' >
                                <Highlight className={card.language}>
                                    {card.question}
                                </Highlight>
                            </pre>
                        </div>
                    </div>
                </div>
                        
                <RecallBtGroup
                    display={showRatingButtons}
                    onclick={rateCard}
                />
            </section>
        )
    }else if(tabDisplay === 'Enter Answer'){
        return(
            <section className="w-full h-9/10 flex flex-col justify-start items-center">
                <div className="w-full h-9/10 flex flex-col justify-start items-center">
                    {/* Enter Answer */}
                    <StudyCardTabHeader 
                         display={tabDisplay}
                         showQuestion={displayQuestion}
                         showAnswer={displayAnswer}
                         enterAnswer={displayUserAnswer}               
                    />
                    <div className="sm:w-[625px] sm:h-95% sm:border-4 sm:border-gray-800 sm:mx-2 flex flex-col justify-start items-center">
                        <ScrollSync>
                            <div className='w-[600px] h-[400px] m-2 overflow-y-auto bg-[#282c34] relative'>
                                <ScrollSyncPane>
                                    <pre className='w-full h-full overflow-y-auto overflow-x-auto bg-[#282c34] whitespace-pre-wrap absolute top-0 left-0' >
                                        <Highlight className={card.language}>
                                            {userAnswer}
                                        </Highlight>
                                    </pre>
                                </ScrollSyncPane>
                                <ScrollSyncPane>
                                        <pre id='typing' className='w-full h-full overflow-y-auto overflow-x-hidden p-2 font-mono whitespace-pre-wrap break-words absolute top-0 left-0 text-transparent bg-transparent
                                        caret-gray-200' contenteditable='true' name='answer' defaultValue={userAnswer} onInput={(e) => {
                                        setUserAnswer(e.target.innerText)
                                        }}>{userAnswerOverlay}
                                        </pre>
                                </ScrollSyncPane>
                            </div>
                        </ScrollSync>
                    </div>
                </div>
                        
                <RecallBtGroup
                    display={showRatingButtons}
                    onclick={rateCard}
                />
            </section>
        )
    }else if(tabDisplay === 'Show Answer'){
        return(
            <section className="w-full h-9/10 flex flex-col justify-start items-center">
                <div className="w-full h-9/10 flex flex-col justify-start items-center">
                    {/* Show Answer */}
                    <StudyCardTabHeader 
                         display={tabDisplay}
                         showQuestion={displayQuestion}
                         showAnswer={displayAnswer}
                         enterAnswer={displayUserAnswer}               
                    />
                    <div className="sm:w-[625px] sm:h-95% sm:border-4 sm:border-gray-800 sm:mx-2 flex flex-col justify-start items-center">
                        <div className='w-[600px] h-[400px] m-2 overflow-y-auto bg-[#282c34] relative'>
                            <pre className='w-full h-full overflow-y-auto overflow-x-auto bg-[#282c34] whitespace-pre-wrap absolute top-0 left-0' >
                                <Highlight className={card.language}>
                                    {card.answer}
                                </Highlight>
                            </pre>
                        </div>
                    </div>
                </div>
                        
                <RecallBtGroup
                    display={showRatingButtons}
                    onclick={rateCard}
                />
            </section>
        )
    }

};

export default StudyBody;