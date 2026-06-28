import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultTheme, ThemeId } from '../theme/themes';
import { defaultFont, FontId, fontSizeDefault } from '@/theme/fonts';

const KEYS = {
	THEME: 'kori_theme',
	FONT: 'kori_font',
	FONT_SIZE: 'kori_font_size',
	FAVOURITES: 'kori_favourites',
} as const;

// ── Theme ────────────────────────────────────────────────────────────────────

export async function saveTheme(themeId: ThemeId): Promise<void> {
	await AsyncStorage.setItem(KEYS.THEME, themeId);
}

export async function loadTheme(): Promise<ThemeId> {
	const value = await AsyncStorage.getItem(KEYS.THEME);
	return (value as ThemeId) ?? defaultTheme;
}

// ── Font ─────────────────────────────────────────────────────────────────────

export async function saveFont(fontId: FontId): Promise<void> {
	await AsyncStorage.setItem(KEYS.FONT, fontId);
}

export async function loadFont(): Promise<FontId> {
	const value = await AsyncStorage.getItem(KEYS.FONT);
	return (value as FontId) ?? defaultFont;
}

// ── Font Size

export async function saveFontSize(size: number): Promise<void> {
	await AsyncStorage.setItem(KEYS.FONT_SIZE, size.toString());
}

export async function loadFontSize(): Promise<number> {
	const value = await AsyncStorage.getItem(KEYS.FONT_SIZE);
	return value ? parseInt(value, 10) : fontSizeDefault;
}

// ── Favourites ───────────────────────────────────────────────────────────────

export async function loadFavourites(): Promise<string[]> {
	const value = await AsyncStorage.getItem(KEYS.FAVOURITES);
	return value ? (JSON.parse(value) as string[]) : [];
}

export async function saveFavourites(favouriteIds: string[]): Promise<void> {
	await AsyncStorage.setItem(KEYS.FAVOURITES, JSON.stringify(favouriteIds));
}

export async function toggleFavourite(
	storyId: string,
	currentFavourites: string[],
): Promise<string[]> {
	const updated = currentFavourites.includes(storyId)
		? currentFavourites.filter((id) => id !== storyId)
		: [...currentFavourites, storyId];

	await saveFavourites(updated);
	return updated;
}

// ── Load All

export interface Preferences {
	theme: ThemeId;
	font: FontId;
	fontSize: number;
	favourites: string[];
}

export async function loadAllPreferences(): Promise<Preferences> {
	const [theme, font, fontSize, favourites] = await Promise.all([
		loadTheme(),
		loadFont(),
		loadFontSize(),
		loadFavourites(),
	]);

	return {
		theme,
		font,
		fontSize,
		favourites,
	};
}
