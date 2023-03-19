TagMini.defaultProps = {
    content: "SUPERHOST"
}

export function TagMini ({ content })
{
    return (
        <button className=" border-solid border-2 p-2 font-bold text-secondary-dark-grey border-secondary-dark-grey">
            <h2>{content}</h2>
        </button>
    )
   
}