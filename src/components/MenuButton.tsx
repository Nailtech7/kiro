import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { usePreferences } from '@/context/PreferencesContext';

interface MenuButtonProps {
	onPress: () => void;
	active?: boolean;
	children: React.ReactNode;
}

export default function MenuButton({
	onPress,
	active = false,
	children,
}: MenuButtonProps) {
	const { theme } = usePreferences();

	return (
		<TouchableOpacity
			onPress={onPress}
			hitSlop={12}
			style={[
				styles.button,
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

const styles = StyleSheet.create({
	button: {
		width: 45,
		height: 45,

		alignItems: 'center',
		justifyContent: 'center',

		borderRadius: 24,
	},
});
