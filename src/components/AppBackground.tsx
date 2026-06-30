import DynamicBackground from '@/background/DynamicBackground';
import { usePreferences } from '@/context/PreferencesContext';
import { StyleSheet, View } from 'react-native';

export function AppBackground() {
	const { theme } = usePreferences();

	if (theme.background.type === 'color') {
		return (
			<View
				pointerEvents='none'
				style={[
					StyleSheet.absoluteFill,
					{
						backgroundColor: theme.background.color,
					},
				]}
			/>
		);
	}

	return <DynamicBackground variant={theme.background.background} />;
}
// export function AppBackground({ children }: PropsWithChildren) {
// 	return (
// 		<View
// 			style={{
// 				flex: 1,

// 				backgroundColor: 'red',
// 			}}
// 		>
// 			{children}
// 		</View>
// 	);
// }

// export function AppBackground() {
// 	const { theme } = usePreferences();

// 	if (theme.background.type === 'color') {
// 		return (
// 			<View
// 				pointerEvents='none'
// 				style={[
// 					StyleSheet.absoluteFill,
// 					{ backgroundColor: theme.background.color },
// 				]}
// 			/>
// 		);
// 	}

// 	return <DynamicBackground variant={theme.background.background} />;
// }
