

const CardHeader = ({ title, dueDate, totalViews }) => {
    return (
        <section className="flex flex-col justify-start items-center">
            <h2>
                {title}
            </h2>
            <div className="flex flex-row justify-center items-center">
                <span>
                    Due: {dueDate}
                </span>
                <span>
                    Total Views: {totalViews}
                </span>
            </div>
        </section>
    )
}

export default CardHeader;
