import Button from "./buttons/Button";
import LanguageDropDown from "./languageDropDown";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import Highlight from "react-highlight";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

const CardForm = ({ newCard, editCard, cardId, createdDate, dueDate, title, createdBy, deck, question, answer, repetitionNumber, easinessFactor, repetitionInterval, totalViews, language, saveAndRefresh}) => {

    const { user } = useAuth0();
    const [questionValue, setQuestionValue] = useState();
    const [answerValue, setAnswerValue]  = useState();
    const [languageValue, setLanguageValue] =useState(language)
    const [activeEdit, setActiveEdit] = useState(editCard)

    useEffect(() => {
        setActiveEdit(false)
        setQuestionValue(question)
        setAnswerValue(answer)
        setLanguageValue(language)
    }, [cardId, question, answer, language])

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
                    'language': languageValue,
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
                    'language': languageValue,
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
                    'language': languageValue,
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
        setActiveEdit(false)
        setQuestionValue(question)
        setAnswerValue(answer)
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
                    <div className="flex justify-center items-center">
                        <label className="mx-2">Select a Language:</label>
                        <select onChange={(e) => setLanguageValue(e.target.value)}>
                            <LanguageDropDown 
                                defaultLanguage={language}
                            />
                        </select>
                    </div>
                    <div className="w-full flex flex-col justify-start items-center xl:flex-row xl:justify-center xl:items-start">
                        <div className="flex flex-col justify-start items-start py-1 px-4">
                            <label className="w-full bg-gray-300 px-2 rounded-t-md">
                                Question
                            </label>
                            <ScrollSync>
                                <div className='w-[500px] h-[190px] overflow-y-auto bg-[#282c34] relative'>
                                    <ScrollSyncPane>
                                        <pre className='w-full h-full overflow-y-auto overflow-x-auto bg-[#282c34] whitespace-pre-wrap absolute top-0 left-0 shadow-lg' >
                                            <Highlight className={languageValue}>
                                                {questionValue}
                                            </Highlight>
                                        </pre>
                                    </ScrollSyncPane>
                                    <ScrollSyncPane>
                                            <pre className='w-full h-full overflow-y-auto overflow-x-hidden p-2 font-mono whitespace-pre-wrap break-words absolute top-0 left-0 text-transparent bg-transparent
                                            caret-gray-200' contenteditable='true' name='answer' defaultValue='' onInput={(e) => {
                                            setQuestionValue(e.target.innerText)
                                            }}>
                                            </pre>
                                    </ScrollSyncPane>
                                </div>
                            </ScrollSync>
                        </div>
                        <div className="flex flex-col justify-start items-start p-1">
                            <label className="w-full bg-gray-300 px-2 rounded-t-md">
                                Answer
                            </label>
                            <ScrollSync>
                                <div className='w-[500px] h-[190px] overflow-y-auto bg-[#282c34] relative'>
                                    <ScrollSyncPane>
                                        <pre className='w-full h-full overflow-y-auto overflow-x-auto bg-[#282c34] whitespace-pre-wrap absolute top-0 left-0' >
                                            <Highlight className={languageValue}>
                                                {answerValue}
                                            </Highlight>
                                        </pre>
                                    </ScrollSyncPane>
                                    <ScrollSyncPane>
                                            <pre className='w-full h-full overflow-y-auto overflow-x-hidden p-2 font-mono whitespace-pre-wrap break-words absolute top-0 left-0 text-transparent bg-transparent
                                            caret-gray-200' contenteditable='true' name='answer' defaultValue='' onInput={(e) => {
                                            setAnswerValue(e.target.innerText)
                                            }}>
                                            </pre>
                                    </ScrollSyncPane>
                                </div>
                            </ScrollSync>
                        </div>
                    </div>
                    <Button
                        type = 'button'
                        name = 'Save'
                        onClick = {handleNewSubmit}
                        width = 'w-28'
                    />
                </form>
            </section>
        )
    }else if(activeEdit === false){
        return(
            <section>
                <div className="w-full flex flex-col justify-start items-center">
                    <div className="flex justify-center items-center">
                        <label className="mx-2">Language:</label>
                        <span>{language[0].toUpperCase() + language.substring(1)}</span>
                    </div>
                    <div className="w-full flex flex-col justify-start items-center xl:flex-row xl:justify-center xl:items-start">
                        <div className="flex flex-col justify-start items-start py-1 px-4">
                            <label className="w-full bg-gray-300 px-2 rounded-t-md">
                                Question
                            </label>
                            <div className='w-[500px] h-[190px] overflow-y-auto bg-[#282c34] relative'>
                                <pre className='w-full h-full overflow-y-auto overflow-x-auto bg-[#282c34] whitespace-pre-wrap absolute top-0 left-0 shadow-lg' >
                                    <Highlight className={languageValue}>
                                        {questionValue}
                                    </Highlight>
                                </pre>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start p-1">
                            <label className="w-full bg-gray-300 px-2 rounded-t-md">
                                Answer
                            </label>
                            <div className='w-[500px] h-[190px] overflow-y-auto bg-[#282c34] relative'>
                                <pre className='w-full h-full overflow-y-auto overflow-x-auto bg-[#282c34] whitespace-pre-wrap absolute top-0 left-0' >
                                    <Highlight className={languageValue}>
                                        {answerValue}
                                    </Highlight>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <Button
                        type = 'button'
                        name = 'Edit'
                        onClick = {() => setActiveEdit(true)}
                        width = 'w-28'
                    />
                </div>
            </section>
        )
    }else if(activeEdit === true){
        return(
            <section className="w-full">
                <form className="w-full flex flex-col justify-start items-center">
                    <div className="flex justify-center items-center">
                        <label className="mx-2">Select a Language:</label>
                        <select onChange={(e) => setLanguageValue(e.target.value)}>
                            <LanguageDropDown 
                                defaultLanguage={language}
                            />
                        </select>
                    </div>
                    <div className="w-full flex flex-col justify-start items-center xl:flex-row xl:justify-center xl:items-start">
                        <div className="flex flex-col justify-start items-start py-1 px-4">
                            <label className="w-full bg-gray-300 px-2 rounded-t-md">
                                Question
                            </label>
                            <ScrollSync>
                                <div className='w-[500px] h-[190px] overflow-y-auto bg-[#282c34] relative'>
                                    <ScrollSyncPane>
                                        <pre className='w-full h-full overflow-y-auto overflow-x-auto bg-[#282c34] whitespace-pre-wrap absolute top-0 left-0 shadow-lg' >
                                            <Highlight className={languageValue}>
                                                {questionValue}
                                            </Highlight>
                                        </pre>
                                    </ScrollSyncPane>
                                    <ScrollSyncPane>
                                            <pre className='w-full h-full overflow-y-auto overflow-x-hidden p-2 font-mono whitespace-pre-wrap break-words absolute top-0 left-0 text-transparent bg-transparent
                                            caret-gray-200' contenteditable='true' name='answer' defaultValue={questionValue} onInput={(e) => {
                                            setQuestionValue(e.target.innerText)
                                            }}>{question}
                                            </pre>
                                    </ScrollSyncPane>
                                </div>
                            </ScrollSync>
                        </div>
                        <div className="flex flex-col justify-start items-start p-1">
                            <label className="w-full bg-gray-300 px-2 rounded-t-md">
                                Answer
                            </label>
                            <ScrollSync>
                                <div className='w-[500px] h-[190px] overflow-y-auto bg-[#282c34] relative'>
                                    <ScrollSyncPane>
                                        <pre className='w-full h-full overflow-y-auto overflow-x-auto bg-[#282c34] whitespace-pre-wrap absolute top-0 left-0' >
                                            <Highlight className={languageValue}>
                                                {answerValue}
                                            </Highlight>
                                        </pre>
                                    </ScrollSyncPane>
                                    <ScrollSyncPane>
                                            <pre className='w-full h-full overflow-y-auto overflow-x-hidden p-2 font-mono whitespace-pre-wrap break-words absolute top-0 left-0 text-transparent bg-transparent
                                            caret-gray-200' contenteditable='true' name='answer' defaultValue={answerValue} onInput={(e) => {
                                            setAnswerValue(e.target.innerText)
                                            }}>{answer}
                                            </pre>
                                    </ScrollSyncPane>
                                </div>
                            </ScrollSync>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Button
                            type = 'button'
                            name = 'Cancel'
                            onClick = {handleCancelSubmit}
                            width = 'w-28'
                        />
                        <Button
                            type = 'button'
                            name = 'Save/Keep Stats'
                            onClick = {handleEditSubmit}
                            width = 'w-32'
                        />
                        <Button
                            type = 'button'
                            name = 'Save/Reset Card'
                            onClick = {handleEditResetSubmit}
                            width = 'w-32'
                        />
                        <Button
                            type = 'button'
                            name = 'Delete Card'
                            onClick = {handleDeleteSubmit}
                            width = 'w-28'
                        />
                    </div>

                </form>
            </section>
        )
    }
}


export default CardForm;