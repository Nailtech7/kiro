import { router, useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ThemeToggle from '@/components/ThemeToggle';
import { usePreferences } from '@/context/PreferencesContext';
import { stories } from '@/data/stories';
import {
	FontId,
	fonts,
	fontSizeMax,
	fontSizeMin,
	fontSizeStep,
} from '@/theme/fonts';
import { Entypo } from '@expo/vector-icons';

export default function ReaderScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();

	const {
		theme,
		fontId,
		setFont,
		fontSize,
		setFontSize,
		favourites,
		toggleFavourite,
	} = usePreferences();

	const story = useMemo(() => stories.find((s) => s.id === id), [id]);

	if (!story) {
		return (
			<SafeAreaView
				style={[styles.container, { backgroundColor: theme.background }]}
			>
				<Text style={{ color: theme.foreground }}>Story not found.</Text>
			</SafeAreaView>
		);
	}

	const currentFont = fonts[fontId] || fonts['default'];
	const isFavourite = favourites.includes(story.id);

	const fontIds = Object.keys(fonts) as FontId[];

	function handleNextFont() {
		const currentIndex = fontIds.indexOf(fontId);

		const nextIndex = (currentIndex + 1) % fontIds.length;

		setFont(fontIds[nextIndex]);
	}

	return (
		<SafeAreaView
			style={[styles.container, { backgroundColor: theme.background }]}
		>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()}>
					<Text style={[styles.button, { color: theme.foreground }]}>←</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => toggleFavourite(story.id)}>
					<Text style={[styles.button, { color: theme.foreground }]}>
						{isFavourite ? '♥' : '♡'}
					</Text>
				</TouchableOpacity>
			</View>

			<ScrollView
				contentContainerStyle={styles.content}
				showsVerticalScrollIndicator={false}
			>
				<Text
					style={[
						styles.title,
						{
							color: theme.foreground,
							fontFamily: currentFont.body,
						},
					]}
				>
					{story.title}
				</Text>

				<Text style={styles.animal}>{story.animal}</Text>

				<Text
					style={{
						color: theme.foreground,
						fontSize,
						lineHeight: fontSize * 1.7,
						fontFamily: currentFont.body,
					}}
				>
					{story.content}
				</Text>

				<Text style={[styles.moralTitle, { color: theme.foreground }]}>
					Moral
				</Text>

				<Text
					style={{
						color: theme.foreground,
						fontSize: fontSize - 1,
						lineHeight: (fontSize - 1) * 1.7,
						fontFamily: currentFont.bodyItalic,
					}}
				>
					{story.moral}
				</Text>
			</ScrollView>

			<View style={styles.controls}>
				<TouchableOpacity
					onPress={() =>
						setFontSize(Math.max(fontSizeMin, fontSize - fontSizeStep))
					}
				>
					<Entypo
						name='minus'
						size={18}
						color={theme.foreground}
					/>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleNextFont}>
					<Entypo
						name='feather'
						size={18}
						color={theme.foreground}
					/>
				</TouchableOpacity>

				<ThemeToggle />

				<TouchableOpacity
					onPress={() =>
						setFontSize(Math.min(fontSizeMax, fontSize + fontSizeStep))
					}
				>
					<Entypo
						name='plus'
						size={18}
						color={theme.foreground}
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		padding: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	content: {
		padding: 20,
		paddingBottom: 80,
	},
	title: {
		fontSize: 28,
		fontWeight: '700',
		marginBottom: 8,
	},
	animal: {
		fontSize: 40,
		marginBottom: 20,
	},
	moralTitle: {
		fontSize: 18,
		fontWeight: '700',
		marginTop: 32,
		marginBottom: 8,
	},
	controls: {
		padding: 16,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	button: {
		fontSize: 18,
	},
});
