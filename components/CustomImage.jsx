CustomImage.defaultProps = {
    src: "/Images/accommodation/accomodation1.svg", 
    alt:"", 
    className: ""
}

export function CustomImage ({src, alt, width , height , className}) {
    return (
        <img src={src} alt={alt} width={width} height={height} className={className} />
    )
}