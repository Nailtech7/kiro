import React from 'react';
import { StyleSheet, View } from 'react-native';

interface FloatingMenuProps {
	children: React.ReactNode;
	position?: 'top-right' | 'bottom-right';
}

export default function FloatingMenu({
	children,
	position = 'top-right',
}: FloatingMenuProps) {
	return (
		<View
			style={[
				styles.container,
				position === 'top-right' ? styles.topRight : styles.bottomRight,
			]}
		>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		right: 8,

		gap: 18,

		alignItems: 'center',

		zIndex: 100,
	},

	topRight: {
		top: 72,
	},

	bottomRight: {
		bottom: 32,
	},
});
