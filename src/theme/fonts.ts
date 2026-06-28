export const fonts = {
	serif: {
		id: 'serif',
		label: 'Serif',
		description: 'Classic & literary',
		body: 'Lora_400Regular',
		bodyItalic: 'Lora_400Regular_Italic',
	},
	rounded: {
		id: 'rounded',
		label: 'Rounded',
		description: 'Friendly & clear',
		body: 'Nunito_400Regular',
		bodyItalic: 'Nunito_400Regular_Italic',
	},
	modern: {
		id: 'modern',
		label: 'Modern',
		description: 'Clean & focused',
		body: 'SourceSerif4_400Regular',
		bodyItalic: 'SourceSerif4_400Regular_Italic',
	},
} as const;

export type Font = (typeof fonts)[keyof typeof fonts];
export type FontId = keyof typeof fonts;

export const defaultFont: FontId = 'serif';

export const fontSizeMin = 14;
export const fontSizeMax = 26;
export const fontSizeDefault = 17;
export const fontSizeStep = 1;
