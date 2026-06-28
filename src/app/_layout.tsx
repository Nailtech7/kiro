import { PreferencesProvider } from '@/context/PreferencesContext';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
	Lora_400Regular,
	Lora_400Regular_Italic,
} from '@expo-google-fonts/lora';

import { PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';

import { ViaodaLibre_400Regular } from '@expo-google-fonts/viaoda-libre';

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		Lora_400Regular,
		Lora_400Regular_Italic,

		PatrickHand_400Regular,

		ViaodaLibre_400Regular,
	});

	if (!fontsLoaded) {
		return null;
	}
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
