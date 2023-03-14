CtaMain.defaultProps = {
    content: "Search" 
}

export function CtaMain({ content }) {
    return(
        <button className=" text-white  bg-primary-red p-3 rounded-sm font-bold">
        {content}
        </button>
    )
    
}