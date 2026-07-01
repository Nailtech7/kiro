import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AboutOverlay from '@/components/AboutOverlay';
import AppIcon from '@/components/AppIcon';
import AppText from '@/components/AppText';
import HomeMenu from '@/components/HomeMenu';

export default function Settings() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<AppText
					style={{
						fontSize: 24,
					}}
				>
					Kiro
				</AppText>

				<TouchableOpacity
					onPress={() => router.push('/')}
					hitSlop={12}
				>
					<AppIcon
						name='close'
						size={26}
					/>
				</TouchableOpacity>
			</View>

			<HomeMenu />

			<AboutOverlay />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

		paddingHorizontal: 28,
		paddingTop: 24,
		paddingBottom: 12,
	},
});
