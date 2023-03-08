import CardTab from './CardTab'
import { useState, useEffect } from "react";

const StudyCardTabHeader = ({ showQuestion, enterAnswer, showAnswer, display}) => {
    return (
        <div className='flex justify-center sm:w-[625px]'>
            <CardTab
                name={'Question'}
                display={display}
                onClick={showQuestion}
            />
            <CardTab
                name={'Enter Answer'}
                display={display}
                onClick={enterAnswer}
            />
            <CardTab
                name={'Show Answer'}
                display={display}
                onClick={showAnswer}
            />
        </div>
    )
};

export default StudyCardTabHeader;
