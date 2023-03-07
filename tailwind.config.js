/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		 "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-red": "#FF5A5F",
				"primary-purple": "#914669",
				"primary-green": "#008489",
				"secondary-dark-grey": "#484848",
				"secondary-grey": "#767676",
			},
		},
	},
	plugins: [],
}
