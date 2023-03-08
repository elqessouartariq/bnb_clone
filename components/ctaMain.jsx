export function CtaMain({content = "Search" }) {
    return(
        <button className=" text-white  bg-primary-red p-3 rounded-sm font-bold">
        {content}
        </button>
    )
    
}