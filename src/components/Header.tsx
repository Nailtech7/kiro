import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { usePreferences } from '@/context/PreferencesContext';
import AppIcon from './AppIcon';
import AppText from './AppText';

interface HeaderProps {
	menuOpen: boolean;
	onToggleMenu: () => void;
}

export default function Header({ menuOpen, onToggleMenu }: HeaderProps) {
	const { theme, fontId } = usePreferences();

	return (
		<View style={styles.container}>
			<AppText style={styles.title}>kiro</AppText>

			<TouchableOpacity
				onPress={onToggleMenu}
				hitSlop={12}
			>
				<AppIcon name={menuOpen ? 'cross' : 'drop'} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 12,
	},
	title: {
		fontWeight: 900,
	},
});
