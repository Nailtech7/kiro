import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import AppIcon from './AppIcon';
import AppText from './AppText';

interface HeaderProps {
	menuOpen: boolean;
	onToggleMenu: () => void;
}

export default function Header({ menuOpen, onToggleMenu }: HeaderProps) {
	return (
		<View style={styles.container}>
			<AppText
				style={[
					styles.title,
					{
						fontSize: 24,
					},
				]}
			>
				Kiro
			</AppText>

			<TouchableOpacity
				onPress={onToggleMenu}
				hitSlop={12}
			>
				<AppIcon
					size={26}
					name={menuOpen ? 'close' : 'water'}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

		paddingHorizontal: 28,
		paddingTop: 24,
		paddingBottom: 12,
	},
	title: {},
});
