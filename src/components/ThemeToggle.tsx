import { TouchableOpacity } from 'react-native';

import { usePreferences } from '@/context/PreferencesContext';
import { ThemeId, themes } from '@/theme/themes';
import { Entypo } from '@expo/vector-icons';

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
			<Entypo
				name='drop'
				size={18}
				color={theme.foreground}
			/>
		</TouchableOpacity>
	);
}
