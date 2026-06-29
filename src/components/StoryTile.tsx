import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import type { Story } from '@/data/stories';
import type { Theme } from '@/theme/themes';
import AppText from './AppText';

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

			<AppText
				style={styles.title}
				numberOfLines={1}
			>
				{story.title}
			</AppText>

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

		marginLeft: 2,
	},
});
