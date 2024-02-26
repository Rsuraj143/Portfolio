module.exports = {
	mode: "jit",
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'linear-gradient(90deg, #152331 0%, #000 100%)',
			  },
			colors: {
				nik: {
					lightGray: "#F6F8FB",
					dark: "#5C637C",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
