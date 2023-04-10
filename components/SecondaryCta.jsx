SecondaryCta.defaultProps = {
	content: "Découvrir des logements",
	padding: "p-2",
};

export function SecondaryCta({ content, padding }) {
	return (
		<>
			<button
				className={`font-bold bg-white ${padding} hover:bg-sky-500`}
			>
				<div className=" flex items-center">
					<h3 className=" text-secondary-dark-grey">{content}</h3>
					<span className="ml-4">
						<img src="/icons/arrow_right.svg" />
					</span>
				</div>
			</button>
		</>
	);
}
