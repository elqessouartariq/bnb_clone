export function CustomImage ({src = "/Images/accommodation/accomodation1.svg", alt = "", width , height , className = ""}) {
    return (
        <img src={src} alt={alt} width={width} height={height} className={className} />
    )
}