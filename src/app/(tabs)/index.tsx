import { router } from 'expo-router';
import { useState } from 'react';
import {
	FlatList,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import StoryTile from '@/components/StoryTile';
import { usePreferences } from '@/context/PreferencesContext';
import { stories } from '@/data/stories';

export default function HomeScreen() {
	const { theme, favourites, toggleFavourite } = usePreferences();

	const [showFavouritesOnly, setShowFavouritesOnly] = useState(false);

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
			<StatusBar
				barStyle={
					['midnight', 'forest', 'dusk'].includes(theme.id)
						? 'light-content'
						: 'dark-content'
				}
			/>

			<View style={styles.controls}>
				<TouchableOpacity
					onPress={() => setShowFavouritesOnly((value) => !value)}
				>
					<Text style={{ color: theme.foreground }}>
						{showFavouritesOnly ? '♥ Favourites' : 'All Stories'}
					</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={handleShuffle}>
					<Text style={{ color: theme.foreground }}>Shuffle</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				data={visibleStories}
				keyExtractor={(item) => item.id}
				numColumns={1}
				contentContainerStyle={styles.list}
				ListEmptyComponent={
					<Text
						style={[
							styles.empty,
							{
								color: theme.foreground,
							},
						]}
					>
						No favourite stories yet.
					</Text>
				}
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
		fontSize: 16,
	},
});
