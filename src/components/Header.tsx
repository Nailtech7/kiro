import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';
import AppIcon from './AppIcon';
import AppText from './AppText';
export default function Header() {
	return (
		<View style={styles.header}>
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
				onPress={() => router.push('/settings')}
				hitSlop={12}
			>
				<AppIcon
					size={24}
					name='sparkles-outline'
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

		paddingHorizontal: 28,
		paddingTop: 24,
		paddingBottom: 12,
	},
	title: {},
});
