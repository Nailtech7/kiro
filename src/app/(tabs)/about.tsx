import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { usePreferences } from '@/context/PreferencesContext';

export default function AboutScreen() {
	const { theme } = usePreferences();

	return (
		<ScrollView
			style={[
				styles.container,
				{
					backgroundColor: theme.background,
				},
			]}
			contentContainerStyle={styles.content}
		>
			<View style={styles.section}>
				<Text style={[styles.heading, { color: theme.foreground }]}>About</Text>

				<Text style={[styles.body, { color: `${theme.foreground}CC` }]}>
					Kiro is a lightweight offline storybook designed for parents and
					children. It focuses on a calm reading experience with fun themes, and
					distraction-free storytelling.
				</Text>
			</View>

			<View style={styles.section}>
				<Text style={[styles.heading, { color: theme.foreground }]}>
					Features
				</Text>

				<Text style={[styles.body, { color: `${theme.foreground}CC` }]}>
					• Offline reading{'\n'}• Adjustable font size{'\n'}• Multiple reading
					themes{'\n'}• Favourite stories{'\n'}• Clean, distraction-free
					interface
				</Text>
			</View>

			<View style={styles.section}>
				<Text style={[styles.heading, { color: theme.foreground }]}>
					Developer
				</Text>

				<Text style={[styles.body, { color: `${theme.foreground}CC` }]}>
					Built with React Native, Expo, and TypeScript.
				</Text>
			</View>

			<Text style={[styles.footer, { color: `${theme.foreground}66` }]}>
				Version 1.0.0
			</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		padding: 28,
	},
	logo: {
		fontSize: 36,
		fontWeight: '700',
		letterSpacing: 1,
	},
	tagline: {
		fontSize: 12,
		marginTop: 6,
		marginBottom: 36,
	},
	section: {
		marginBottom: 20,
	},
	heading: {
		fontSize: 16,
		fontWeight: '600',
		marginBottom: 10,
	},
	body: {
		fontSize: 12,
		lineHeight: 28,
	},
	footer: {
		marginTop: 24,
		fontSize: 10,
		textAlign: 'center',
	},
});
