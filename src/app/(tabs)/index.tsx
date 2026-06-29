import AboutOverlay from '@/components/AboutOverlay';
import Header from '@/components/Header';
import StoryList from '@/components/StoryList';
import ThemeMenu from '@/components/ThemeMenu';
import { usePreferences } from '@/context/PreferencesContext';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { theme } = usePreferences();
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
			<Header
				menuOpen={menuOpen}
				onToggleMenu={() => setMenuOpen(!menuOpen)}
			/>

			{menuOpen && (
				<View style={[styles.overlay, { backgroundColor: theme.background }]} />
			)}

			{menuOpen && <ThemeMenu onClose={() => setMenuOpen(false)} />}

			{menuOpen && <AboutOverlay />}

			<StoryList />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	overlay: {
		...StyleSheet.absoluteFill,

		top: 46, // adjust to match  Header height

		zIndex: 1,
	},
});
