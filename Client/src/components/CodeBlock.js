import Highlight from 'react-highlight';

const CodeBlock = ({ string }) => {
    return(
        <div contentEditable='true' className='w-[200px] whitespace-pre-wrap overflow'>
            <Highlight className='javascript'>
                {string}
            </Highlight>
        </div>
    )
}

export default CodeBlock;