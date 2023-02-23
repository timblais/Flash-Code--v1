const SubHeader = ({ title }) => {    
    return (
            <div className="flex flex-row justify-between w-full text-2xl py-2 px-4 border-b-4 border-indigo-500 bg-indigo-300">
                <h1 >
                    {title}
                </h1>
            </div>
    )
}

export default SubHeader;