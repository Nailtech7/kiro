export const fonts = {
	default: {
		id: 'default',
		label: 'Default',
		body: 'Lora_400Regular',
		bodyItalic: 'Lora_400Regular_Italic',
	},

	handwritten: {
		id: 'handwritten',
		label: 'Handwritten',
		body: 'PatrickHand_400Regular',
		bodyItalic: 'PatrickHand_400Regular',
	},
} as const;

export type Font = (typeof fonts)[keyof typeof fonts];
export type FontId = keyof typeof fonts;

export const defaultFont: FontId = 'default';

export const fontSizeMin = 12;
export const fontSizeMax = 24;
export const fontSizeDefault = 16;
export const fontSizeStep = 1;
