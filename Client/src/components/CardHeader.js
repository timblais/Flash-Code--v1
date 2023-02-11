

const CardHeader = ({ title, dueDate, totalViews }) => {
    return (
        <section>
            <h2>
                {title}
            </h2>
            <div>
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
