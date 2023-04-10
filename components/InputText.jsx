InputText.defaultProps = {
	label: "label",
	placeholder: "Placeholder",
	width: "full",
};

export function InputText({ label, placeholder, width }) {
	return (
		<div>
			<label className="block text-secondary-dark-grey  font-bold text-xs uppercase">
				{label}
			</label>
			<input
				className={`border-[#E3E3E3] border border-solid p-3 font-normal text-base w-${width}`}
				type="text"
				placeholder={placeholder}
			/>
		</div>
	);
}
