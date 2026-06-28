import { Text, TouchableOpacity } from 'react-native';

import { usePreferences } from '@/context/PreferencesContext';
import { ThemeId, themes } from '@/theme/themes';

export default function ThemeToggle() {
	const { theme, themeId, setTheme } = usePreferences();

	const themeIds = Object.keys(themes) as ThemeId[];

	function nextTheme() {
		const currentIndex = themeIds.indexOf(themeId);

		const nextIndex = (currentIndex + 1) % themeIds.length;

		setTheme(themeIds[nextIndex]);
	}

	return (
		<TouchableOpacity onPress={nextTheme}>
			<Text style={{ color: theme.foreground }}>🎨</Text>
		</TouchableOpacity>
	);
}
