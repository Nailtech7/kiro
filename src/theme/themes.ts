export const themes = {
	//dynamic
	dark: {
		id: 'dark',

		foreground: '#F2F6FF',

		background: {
			type: 'dynamic',

			background: 'night',
		},
	},

	light: {
		id: 'light',

		foreground: '#203040',

		background: {
			type: 'dynamic',

			background: 'day',
		},
	},

	//solid colors
	forest: {
		id: 'forest',

		foreground: '#f7edcc',

		background: {
			type: 'color',

			color: '#12473a',
		},
	},

	ocean: {
		id: 'ocean',

		foreground: '#053324',

		background: {
			type: 'color',

			color: '#8fc7f7',
		},
	},

	mars: {
		id: 'mars',
		foreground: '#ff9452',
		background: {
			type: 'color',

			color: '#0a0819',
		},
	},

	jupiter: {
		id: 'jupiter',
		foreground: '#f0f2e3',
		background: {
			type: 'color',

			color: '#1e1c64',
		},
	},

	mercury: {
		id: 'mercury',
		foreground: '#2e3333',
		background: {
			type: 'color',

			color: '#d6dbd3',
		},
	},

	venus: {
		id: 'venus',
		foreground: '#13361f',
		background: {
			type: 'color',

			color: '#f0e6c7',
		},
	},

	sun: {
		id: 'sun',
		foreground: '#212e3d',
		background: {
			type: 'color',

			color: '#fad41f',
		},
	},

	volcano: {
		id: 'volcano',
		foreground: '#ffe036',
		background: {
			type: 'color',

			color: '#080d1e',
		},
	},

	neptune: {
		id: 'neptune',
		foreground: '#08f2ff',
		background: {
			type: 'color',

			color: '#33064f',
		},
	},
} as const;

export const defaultTheme: ThemeId = 'light';
export type ThemeId = keyof typeof themes;
export type Theme = (typeof themes)[ThemeId];
