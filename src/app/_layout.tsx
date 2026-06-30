import { PreferencesProvider } from '@/context/PreferencesContext';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
	Lora_400Regular,
	Lora_400Regular_Italic,
} from '@expo-google-fonts/lora';

import { PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';

import { AppBackground } from '@/components/AppBackground';
import { ViaodaLibre_400Regular } from '@expo-google-fonts/viaoda-libre';
import { StyleSheet, View } from 'react-native';

import { DefaultTheme, ThemeProvider } from '@react-navigation/native';

// Build this once outside the component — stable reference, no re-renders
const AppNavigationTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'transparent', // propagates to every native Screen in the tree
	},
};

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
				<ThemeProvider value={AppNavigationTheme}>
					<View style={styles.root}>
						<AppBackground />
						<Stack
							screenOptions={{
								headerShown: false,
								contentStyle: {
									backgroundColor: 'transparent',
								},
							}}
						>
							<Stack.Screen name='(tabs)' />

							<Stack.Screen
								name='reader/[id]'
								options={{
									presentation: 'card',
									headerShown: false,

									contentStyle: { backgroundColor: 'transparent' },
								}}
							/>
						</Stack>
					</View>
				</ThemeProvider>
			</PreferencesProvider>
		</SafeAreaProvider>
	);
}
const styles = StyleSheet.create({
	root: { flex: 1 },
});
