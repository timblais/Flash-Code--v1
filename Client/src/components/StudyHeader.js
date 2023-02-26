const StudyHeader = ({ deckName, cardsRemaining}) => {
    return(
        <section className="w-full flex flex-col justify-start items-center">
            <h2 className="w-full flex justify-center items-center text-xl p-0.5">
                Studying {deckName}
            </h2>
            <span className="w-full flex justify-center items-center text-lg p-0.5">
                {cardsRemaining} Cards to Review
            </span>
        </section>
    )
}

export default StudyHeader;