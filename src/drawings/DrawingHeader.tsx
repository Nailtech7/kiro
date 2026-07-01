import AppIcon from '@/components/AppIcon';
import AppText from '@/components/AppText';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface DrawingHeaderProps {
	onUndo: () => void;
	onRedo: () => void;
	onClear: () => void;
}

export default function DrawingHeader({
	onUndo,
	onRedo,
	onClear,
}: DrawingHeaderProps) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => router.push('/')}
				hitSlop={12}
			>
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
			</TouchableOpacity>

			<View style={styles.rightSection}>
				<TouchableOpacity
					onPress={onUndo}
					hitSlop={12}
				>
					<AppIcon
						name='arrow-undo-outline'
						size={24}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={onRedo}
					hitSlop={12}
				>
					<AppIcon
						name='arrow-redo-outline'
						size={24}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={onClear}
					hitSlop={12}
				>
					<AppIcon
						name='trash-outline'
						size={24}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => router.push('/settings')}
					hitSlop={12}
				>
					<AppIcon
						size={24}
						name={'sparkles-outline'}
					/>
				</TouchableOpacity>
			</View>
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

	rightSection: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
	},
});
