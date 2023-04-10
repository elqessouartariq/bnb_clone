import { CustomImage } from "./CustomImage";
import { SecondaryCta } from "./SecondaryCta";

export default function BigCard() {
	return (
		<>
			<div className="relative">
				<CustomImage
					src="/Images/BigCard.svg"
					className="-z-50 w-full object-cover"
				/>
				<div className="flex flex-col space-y-6  items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10">
					<img src="/logoWhite.svg" alt="" className="h-32 w-32" />
					<SecondaryCta padding="p-4" />
				</div>
			</div>
		</>
	);
}
