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
                />
        </section>
    )
};

export default StudyBody;