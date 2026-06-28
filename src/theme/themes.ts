export const themes = {
	forest: {
		id: 'forest',
		foreground: '#f7edcc',
		background: '#12473a',
	},

	ocean: {
		id: 'ocean',
		foreground: '#053324',
		background: '#8fc7f7',
	},

	mars: {
		id: 'mars',
		foreground: '#ff9452',
		background: '#0a0819',
	},

	jupiter: {
		id: 'jupiter',
		foreground: '#f0f2e3',
		background: '#1e1c64',
	},

	mercury: {
		id: 'mercury',
		foreground: '#2e3333',
		background: '#d6dbd3',
	},

	venus: {
		id: 'venus',
		foreground: '#13361f',
		background: '#f0e6c7',
	},

	sun: {
		id: 'sun',
		foreground: '#212e3d',
		background: '#fad41f',
	},

	volcano: {
		id: 'volcano',
		foreground: '#ffe036',
		background: '#080d1e',
	},

	neptune: {
		id: 'neptune',
		foreground: '#08f2ff',
		background: '#33064f',
	},

	light: {
		id: 'light',
		foreground: '#000000',
		background: '#ffffff',
	},

	dark: {
		id: 'dark',
		foreground: '#ffffff',
		background: '#000000',
	},
} as const;

export type Theme = (typeof themes)[keyof typeof themes];
export type ThemeId = Theme['id'];

export const defaultTheme: ThemeId = 'mercury';
