import StoryTile from '@/components/StoryTile';
import { usePreferences } from '@/context/PreferencesContext';
import { stories } from '@/data/stories';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from './AppText';

interface StoryListProps {
	showFavouritesOnly: boolean;
}

export default function StoryList({ showFavouritesOnly }: StoryListProps) {
	const { theme, favourites, toggleFavourite } = usePreferences();

	const visibleStories = showFavouritesOnly
		? stories.filter((story) => favourites.includes(story.id))
		: stories;

	function handleShuffle() {
		const random = stories[Math.floor(Math.random() * stories.length)];

		router.push({
			pathname: '/reader/[id]',
			params: {
				id: random.id,
			},
		});
	}

	return (
		<SafeAreaView
			style={[
				styles.container,
				{
					backgroundColor: theme.background,
				},
			]}
		>
			<FlatList
				data={visibleStories}
				keyExtractor={(item) => item.id}
				numColumns={1}
				contentContainerStyle={styles.list}
				ListEmptyComponent={<AppText>No favourite stories yet.</AppText>}
				renderItem={({ item }) => (
					<StoryTile
						story={item}
						theme={theme}
						isFavourite={favourites.includes(item.id)}
						onPress={() =>
							router.push({
								pathname: '/reader/[id]',
								params: {
									id: item.id,
								},
							})
						}
						onFavouriteToggle={() => toggleFavourite(item.id)}
					/>
				)}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	controls: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 16,
	},
	list: {
		padding: 12,
	},
	empty: {
		textAlign: 'center',
		marginTop: 48,
	},
});
