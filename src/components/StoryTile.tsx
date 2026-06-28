import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import type { Story } from '@/data/stories';
import type { Theme } from '@/theme/themes';

interface StoryTileProps {
	story: Story;
	theme: Theme;
	isFavourite: boolean;
	onPress: () => void;
	onFavouriteToggle: () => void;
}

export default function StoryTile({
	story,
	theme,
	isFavourite,
	onPress,
	onFavouriteToggle,
}: StoryTileProps) {
	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.65}
			style={styles.row}
		>
			<Text style={styles.emoji}>{story.animal}</Text>

			<Text
				numberOfLines={1}
				style={[
					styles.title,
					{
						color: theme.foreground,
					},
				]}
			>
				{story.title}
			</Text>

			<TouchableOpacity
				onPress={onFavouriteToggle}
				hitSlop={12}
			>
				<Entypo
					name={isFavourite ? 'heart' : 'heart-outlined'}
					size={16}
					color={theme.foreground}
				/>
			</TouchableOpacity>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 12,
	},

	emoji: {
		fontSize: 18,
		width: 32,
		textAlign: 'left',
	},

	title: {
		flex: 1,
		fontSize: 14,
		fontWeight: '400',
		marginLeft: 2,
	},
});
