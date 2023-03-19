SecondaryCta.defaultProps = {
    content: "Découvrir des logements"
}

export function SecondaryCta ({ content }) {
    return (
        <>
        <button className=" font-bold bg-white hover:bg-sky-500
         p-2">
            <div className=" flex items-center">
                <h3 className=" text-secondary-dark-grey">{content}</h3>
                <span className="ml-4"><img src="/icons/arrow_right.svg"/></span>
            </div>
        </button>
        </>
    )
}