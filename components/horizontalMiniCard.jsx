import { CustomImage } from "./customImage"

export function HorizontalMiniCard ({src = "/Images/accommodation/accomodation1.svg", content = "Logement"}) {
    return (
        <div className="flex h-20 w-96 items-center rounded-lg bg-white drop-shadow-tariq">
            <div className="w-32">
                <CustomImage src={src} className="object-cover h-20" />
            </div>
            <div>
            <h1 className="ml-3 font-medium">{content}</h1>
            </div>
        </div>
    )
}