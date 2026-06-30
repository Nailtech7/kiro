import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from './AppText';

export default function AboutOverlay() {
	return (
		<View
			style={styles.container}
			pointerEvents='none'
		>
			<AppText>give kiro stars</AppText>

			<AppText>feedback</AppText>

			<AppText>app by lilacblues studio</AppText>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',

		left: 28,
		bottom: 20,

		gap: 24,

		zIndex: 100,
	},
});
