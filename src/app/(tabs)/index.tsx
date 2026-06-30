import AboutOverlay from '@/components/AboutOverlay';
import { AppBackground } from '@/components/AppBackground';
import Header from '@/components/Header';
import HomeMenu from '@/components/HomeMenu';
import StoryList from '@/components/StoryList';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [showFavouritesOnly, setShowFavouritesOnly] = useState(false);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			{/* <AppBackground /> */}
			<Header
				menuOpen={menuOpen}
				onToggleMenu={() => setMenuOpen(!menuOpen)}
			/>

			{menuOpen ? (
				<HomeMenu
					showFavouritesOnly={showFavouritesOnly}
					setShowFavouritesOnly={setShowFavouritesOnly}
					onClose={() => setMenuOpen(false)}
				/>
			) : (
				<StoryList showFavouritesOnly={showFavouritesOnly} />
			)}

			{menuOpen && <AboutOverlay />}
		</SafeAreaView>
	);
}
