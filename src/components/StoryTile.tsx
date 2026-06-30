import type { Story } from '@/data/stories';
import type { Theme } from '@/theme/themes';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';

interface StoryTileProps {
	story: Story;
	theme: Theme;
	isFavourite: boolean;
	onPress: () => void;
	onFavouriteToggle: () => void;
}

export default function StoryTile({ story, theme, onPress }: StoryTileProps) {
	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.6}
			style={styles.wrapper}
		>
			<View style={styles.row}>
				{/* Emoji — top-aligned with title */}
				<Text style={styles.emoji}>{story.animal}</Text>

				{/* Title + category */}
				<View style={styles.textBlock}>
					<AppText
						style={styles.title}
						numberOfLines={1}
					>
						{story.title}
					</AppText>
					<AppText
						style={[styles.category, { color: theme.foreground }]}
						numberOfLines={1}
					>
						{story.category}
					</AppText>
				</View>
			</View>

			{/* Hairline separator at the bottom */}
			<View style={[styles.separator, { backgroundColor: theme.foreground }]} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		paddingHorizontal: 14,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		paddingVertical: 12,
	},
	emoji: {
		fontSize: 24,
		lineHeight: 32, // matches title lineHeight so tops align
		width: 28,
		textAlign: 'left',
	},
	textBlock: {
		flex: 1,
		marginLeft: 12,
		gap: 2,
	},
	title: {
		fontSize: 18,
		fontWeight: '500',
		lineHeight: 24,
		letterSpacing: 0.1,
	},
	category: {
		fontSize: 16,
		fontWeight: '400',
		opacity: 0.45,
		textTransform: 'capitalize',
	},
	separator: {
		height: StyleSheet.hairlineWidth,
		opacity: 0.15,
	},
});
