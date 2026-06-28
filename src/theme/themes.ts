export const themes = {
	midnight: {
		id: 'midnight',
		label: 'Midnight',
		background: '#121212',
		foreground: '#F5F5F5',
	},
	ocean: {
		id: 'ocean',
		label: 'Ocean',
		background: '#EAF3FF',
		foreground: '#1A365D',
	},
	parchment: {
		id: 'parchment',
		label: 'Parchment',
		background: '#F7F0E6',
		foreground: '#2C1810',
	},
	forest: {
		id: 'forest',
		label: 'Forest',
		background: '#1A2E1A',
		foreground: '#D4EDDA',
	},
	dusk: {
		id: 'dusk',
		label: 'Dusk',
		background: '#2D1B33',
		foreground: '#F0D9FF',
	},
	paper: {
		id: 'paper',
		label: 'Paper',
		background: '#FAFAFA',
		foreground: '#1A1A1A',
	},
} as const;

export type Theme = (typeof themes)[keyof typeof themes];
export type ThemeId = Theme['id'];

export const defaultTheme: ThemeId = 'midnight';
