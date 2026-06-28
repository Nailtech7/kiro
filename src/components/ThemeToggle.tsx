import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { themes } from '../theme/themes';

interface Theme {
	id: string;
	label: string;
	background: string;
	foreground: string;
}

interface ThemePickerProps {
	currentThemeId: string;
	onSelect: (themeId: string) => void;
	theme: Theme;
}

const ThemePicker: React.FC<ThemePickerProps> = ({
	currentThemeId,
	onSelect,
	theme,
}) => {
	const { foreground } = theme;

	const themeList = Object.values(themes);

	const handleThemeChange = () => {
		const currentIndex = themeList.findIndex((t) => t.id === currentThemeId);

		const nextIndex = (currentIndex + 1) % themeList.length;

		onSelect(themeList[nextIndex].id);
	};

	return (
		<TouchableOpacity
			style={[
				styles.button,
				{
					borderColor: `${foreground}44`,
					backgroundColor: `${foreground}11`,
				},
			]}
			onPress={handleThemeChange}
			activeOpacity={0.7}
		>
			<Text style={[styles.icon, { color: foreground }]}>🎨</Text>
		</TouchableOpacity>
	);
};

export default ThemePicker;

const styles = StyleSheet.create({
	button: {
		width: 42,
		height: 42,
		borderRadius: 21,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		fontSize: 20,
	},
});
