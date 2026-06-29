import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { usePreferences } from '@/context/PreferencesContext';
import { ThemeId, themes } from '@/theme/themes';
import AppIcon from './AppIcon';

interface ThemeMenuProps {
	onClose: () => void;
}

export default function ThemeMenu({ onClose }: ThemeMenuProps) {
	const { theme, themeId, setTheme } = usePreferences();

	const themeIds = Object.keys(themes) as ThemeId[];

	function nextTheme() {
		const current = themeIds.indexOf(themeId);
		const next = (current + 1) % themeIds.length;

		setTheme(themeIds[next]);
	}

	async function selectLight() {
		await setTheme('light');
		onClose();
	}

	async function selectDark() {
		await setTheme('dark');
		onClose();
	}

	//do it later
	function selectShuffle() {
		// TODO
		// setThemeMode('shuffle');
		onClose();
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={selectLight}
				hitSlop={12}
			>
				<AppIcon name='light-up' />
			</TouchableOpacity>

			<TouchableOpacity
				onPress={selectDark}
				hitSlop={12}
			>
				<AppIcon name='moon' />
			</TouchableOpacity>

			<TouchableOpacity
				onPress={selectShuffle}
				hitSlop={12}
			>
				<AppIcon name='shuffle' />
			</TouchableOpacity>

			<TouchableOpacity
				onPress={nextTheme}
				hitSlop={12}
			>
				<AppIcon name='drop' />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',

		top: 72,
		right: 20,

		gap: 24,

		alignItems: 'center',

		zIndex: 100,
	},
});
