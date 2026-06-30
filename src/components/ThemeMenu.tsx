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

	function MenuButton({
		onPress,
		active = false,
		children,
	}: {
		onPress: () => void;
		active?: boolean;
		children: React.ReactNode;
	}) {
		return (
			<TouchableOpacity
				onPress={onPress}
				hitSlop={12}
				style={[
					styles.iconButton,
					active && {
						borderWidth: 1.5,
						borderColor: theme.foreground,
					},
				]}
			>
				{children}
			</TouchableOpacity>
		);
	}

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
			<MenuButton
				onPress={selectLight}
				active={themeId === 'light'}
			>
				<AppIcon
					size={26}
					name='sunny-outline'
				/>
			</MenuButton>

			<MenuButton
				onPress={selectDark}
				active={themeId === 'dark'}
			>
				<AppIcon
					size={26}
					name='cloudy-night-outline'
				/>
			</MenuButton>

			<MenuButton
				onPress={selectShuffle}
				active={false} // later: shuffleEnabled
			>
				<AppIcon
					size={26}
					name='shuffle-outline'
				/>
			</MenuButton>

			<MenuButton onPress={nextTheme}>
				<AppIcon
					size={26}
					name='water-outline'
				/>
			</MenuButton>

			{/* <MenuButton>
				<AppIcon
					size={14}
					name='heart-outline'
				/>
			</MenuButton> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',

		top: 72,
		right: 18,

		gap: 18,

		alignItems: 'center',

		zIndex: 100,
	},
	iconButton: {
		width: 45,
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 24,
	},
	activeButton: {
		borderWidth: 1.5,
	},
});
