export function Header({ children }) {
	return (
		<>
			<div className="flex justify-between p-3">
				<div>
					<a href="#">
						<img src="/logoWhite.svg" className=" h-9 w-9" />
					</a>
				</div>
				<ul className="flex space-x-10 text-white">
					<li>
						<a href="#">Français (FR)</a>
					</li>
					<li>
						<a href="#">EUR €</a>
					</li>
					<li>
						<a href="#">Devenir hôte</a>
					</li>
					<li>
						<a href="#">Créer son expérience</a>
					</li>
					<li>
						<a href="#">Aide</a>
					</li>
					<li>
						<a href="#">Inscription</a>
					</li>
					<li>
						<a href="#">Connexion</a>
					</li>
				</ul>
			</div>
			{children}
		</>
	);
}
