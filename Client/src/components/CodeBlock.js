import Highlight from 'react-highlight';

const CodeBlock = ({ string }) => {
    return(
        <div contentEditable='true'>
            <Highlight className='javascript'>
                {string}
            </Highlight>
        </div>
    )
}

export default CodeBlock;