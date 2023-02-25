

const CardHeader = ({ title, dueDate, totalViews }) => {
    return (
        <section className="flex flex-col justify-start items-center p-1">
            <h2 className="p-2 text-xl underline">
                {title}
            </h2>
            <div className="flex flex-row justify-center items-center">
                <span className="px-2 text-lg">
                    Due: {dueDate}
                </span>
                <span className="px-2 text-lg">
                    Total Views: {totalViews}
                </span>
            </div>
        </section>
    )
}

export default CardHeader;
