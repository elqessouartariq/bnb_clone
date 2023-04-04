export function Header() {
	return (
		<div className="flex justify-between p-3">
			<div>
				<img src="/logoWhite.svg" className=" h-9 w-9" />
			</div>
			<ul className="flex space-x-10 text-white"> 
				<li>Français (FR)</li>
				<li>EUR €</li>
				<li>Devenir hôte</li>
				<li>Créer son expérience</li>
				<li>Aide</li>
				<li>Inscription</li>
				<li>Connexion</li>
			</ul>
		</div>
	)
}