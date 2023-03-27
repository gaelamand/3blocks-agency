/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		screens: {
			"sm": {"min": "200px", "max": "600px"}
		}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
		  {
			mytheme: {
			  primary: "#000001",
			  secondary: "#0D1425",
			  accent: "#162031",
			  neutral: "#ffffff",
			},
		  },
		],
	  },
};


