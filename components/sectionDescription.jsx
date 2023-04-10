SectionDescription.defaultProps = {
	desc: "Voyages de plusieurs jours organisés par des experts locaux avec activités, repas et logements compris",
};

export function SectionDescription({ desc }) {
	return (
		<h3 className=" text-secondary-dark-grey font-light  text-base  mb-6 w-[571px]">
			{desc}
		</h3>
	);
}
