/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
			},
			colors: {
				primary: {},
				secondary: {},
				background: {
					light: '#ECECEC',
				},
				accent: {
					1: '#FF6C30',
					2: '#AC9360',
					3: '#45D62C',
					4: '#FFBB00',
					5: '#CC0733',
					6: '#BB8B42',
					7: '#9E7AD2',
					8: '#88898A',
					9: '#20A2FF',
					10: '#F67133',
					11: '#914451',
				},
			},
		},
	},
	plugins: [
		plugin(({ addUtilities, theme }) => {
			const colors = theme('colors')
			const strokeUtilities = {}

			Object.entries(colors).forEach(([colorName, colorValue]) => {
				if (typeof colorValue === 'string') {
					strokeUtilities[`.text-stroke-${colorName}`] = {
						'-webkit-text-stroke': `8px ${colorValue}`,
					}
				} else if (typeof colorValue === 'object') {
					Object.entries(colorValue).forEach(([shade, value]) => {
						strokeUtilities[`.text-stroke-${colorName}-${shade}`] = {
							'-webkit-text-stroke': `8px ${value}`,
						}
					})
				}
			})

			addUtilities(strokeUtilities)
		}),
	],
};
