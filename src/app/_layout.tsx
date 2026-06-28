import { PreferencesProvider } from '@/context/PreferencesContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
	Lora_400Regular,
	Lora_400Regular_Italic,
	useFonts,
} from '@expo-google-fonts/lora';

import {
	Nunito_400Regular,
	Nunito_400Regular_Italic,
} from '@expo-google-fonts/nunito';

import {
	SourceSerif4_400Regular,
	SourceSerif4_400Regular_Italic,
} from '@expo-google-fonts/source-serif-4';

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		Lora_400Regular,

		Lora_400Regular_Italic,

		Nunito_400Regular,

		Nunito_400Regular_Italic,

		SourceSerif4_400Regular,

		SourceSerif4_400Regular_Italic,
	});

	if (!fontsLoaded) return null;
	return (
		<SafeAreaProvider>
			<PreferencesProvider>
				<StatusBar />

				<Stack
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name='(tabs)' />

					<Stack.Screen
						name='reader/[id]'
						options={{
							presentation: 'card',
						}}
					/>
				</Stack>
			</PreferencesProvider>
		</SafeAreaProvider>
	);
}
