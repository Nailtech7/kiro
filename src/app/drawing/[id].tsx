//router.push(`/drawing/${story.id}`);

import { useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppIcon from '@/components/AppIcon';
import AppText from '@/components/AppText';
import MenuButton from '@/components/MenuButton';
import { stories } from '@/data/stories';
import DrawingHeader from '@/drawings/DrawingHeader';

const CANVAS_SIZE = Dimensions.get('window').width;

export default function DrawingScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();

	function handleUndo() {
		// TODO
	}

	function handleRedo() {
		// TODO
	}

	function handleClear() {
		// TODO
	}

	const story = useMemo(() => stories.find((story) => story.id === id), [id]);

	if (!story) {
		return (
			<SafeAreaView style={[styles.container]}>
				<AppText>Story not found.</AppText>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<DrawingHeader
				onUndo={handleUndo}
				onRedo={handleRedo}
				onClear={handleClear}
			/>

			{/* DrawingCanvas goes here */}

			<View
				style={[
					styles.canvasPlaceholder,
					{
						width: CANVAS_SIZE,
						height: CANVAS_SIZE,
						// backgroundColor: transparent,
					},
				]}
			/>

			<View style={styles.content}>
				<AppText>{story.moral}</AppText>

				<View style={styles.footer}>
					<AppText>Kiro · Jul 2, 2026</AppText>

					<MenuButton onPress={() => {}}>
						<AppIcon name='share-social-outline' />
					</MenuButton>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	headerActions: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},

	canvasPlaceholder: {
		alignSelf: 'center',
	},

	content: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 20,
		justifyContent: 'space-between',
	},

	moral: {
		fontSize: 18,
		lineHeight: 30,
		textAlign: 'center',
	},

	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: 24,
	},
});
