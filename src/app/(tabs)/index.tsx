import Header from '@/components/Header';
import StoryList from '@/components/StoryList';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header />
			<StoryList />
		</SafeAreaView>
	);
}
