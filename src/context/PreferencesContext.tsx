import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from 'react';

import { themes, Theme, ThemeId } from '@/theme/themes';
import { FontId } from '@/theme/fonts';
import {
	loadAllPreferences,
	saveTheme,
	saveFont,
	saveFontSize,
	saveFavourites,
} from '@/utils/preferences';

interface PreferencesContextType {
	theme: Theme;
	themeId: ThemeId;
	fontId: FontId;
	fontSize: number;
	favourites: string[];

	setTheme: (id: ThemeId) => Promise<void>;
	setFont: (id: FontId) => Promise<void>;
	setFontSize: (size: number) => Promise<void>;
	toggleFavourite: (storyId: string) => Promise<void>;

	showFavouritesOnly: boolean;
	setShowFavouritesOnly: React.Dispatch<React.SetStateAction<boolean>>;

	ready: boolean;
}

const PreferencesContext = createContext<PreferencesContextType | null>(null);

export function PreferencesProvider({ children }: { children: ReactNode }) {
	const [ready, setReady] = useState(false);

	const [themeId, setThemeId] = useState<ThemeId>('mercury');
	const [fontId, setFontId] = useState<FontId>('default');
	const [fontSize, setFontSizeState] = useState(17);
	const [favourites, setFavouritesState] = useState<string[]>([]);
	const [showFavouritesOnly, setShowFavouritesOnly] = useState(false);

	useEffect(() => {
		async function init() {
			const prefs = await loadAllPreferences();

			setThemeId(prefs.theme);
			setFontId(prefs.font);
			setFontSizeState(prefs.fontSize);
			setFavouritesState(prefs.favourites);

			setReady(true);
		}

		init();
	}, []);

	async function setTheme(id: ThemeId) {
		setThemeId(id);
		await saveTheme(id);
	}

	async function setFont(id: FontId) {
		setFontId(id);
		await saveFont(id);
	}

	async function setFontSize(size: number) {
		setFontSizeState(size);
		await saveFontSize(size);
	}

	async function toggleFavourite(storyId: string) {
		const updated = favourites.includes(storyId)
			? favourites.filter((id) => id !== storyId)
			: [...favourites, storyId];

		setFavouritesState(updated);
		await saveFavourites(updated);
	}

	return (
		<PreferencesContext.Provider
			value={{
				ready,
				theme: themes[themeId],
				themeId,
				fontId,
				fontSize,
				favourites,
				setTheme,
				setFont,
				setFontSize,
				toggleFavourite,

				showFavouritesOnly,

				setShowFavouritesOnly,
			}}
		>
			{children}
		</PreferencesContext.Provider>
	);
}

export function usePreferences() {
	const context = useContext(PreferencesContext);

	if (!context) {
		throw new Error('usePreferences must be used inside PreferencesProvider');
	}

	return context;
}
