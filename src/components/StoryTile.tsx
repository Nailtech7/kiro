import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import type { Story } from '@/data/stories';

interface Theme {
	background: string;
	foreground: string;
}

interface StoryTileProps {
	story: Story;
	theme: Theme;
	isFavourite: boolean;
	onPress: () => void;
	onFavouriteToggle: () => void;
}

const StoryTile: React.FC<StoryTileProps> = ({
	story,
	theme,
	isFavourite,
	onPress,
	onFavouriteToggle,
}) => {
	const { background, foreground } = theme;

	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.75}
		>
			{/* Animal icon */}
			<Text style={styles.animal}>{story.animal}</Text>

			{/* Title */}
			<Text
				style={[styles.title, { color: foreground }]}
				numberOfLines={2}
			>
				{story.title}
			</Text>

			{/* Favourite button */}
			<TouchableOpacity
				style={styles.favButton}
				onPress={onFavouriteToggle}
				hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
			>
				<Text
					style={[
						styles.favIcon,
						{ color: isFavourite ? foreground : `${foreground}44` },
					]}
				>
					{isFavourite ? '♥' : '♡'}
				</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

export default StoryTile;

const styles = StyleSheet.create({
	tile: {
		flex: 1,
		margin: 6,
		borderRadius: 16,
		borderWidth: 1,
		padding: 16,
		minHeight: 140,
		justifyContent: 'space-between',
	},
	animal: {
		fontSize: 36,
		marginBottom: 8,
	},
	title: {
		fontSize: 14,
		fontWeight: '600',
		letterSpacing: 0.2,
		lineHeight: 20,
		flex: 1,
	},
	favButton: {
		alignSelf: 'flex-end',
		marginTop: 8,
	},
	favIcon: {
		fontSize: 20,
	},
});
