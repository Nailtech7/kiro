import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { usePreferences } from '@/context/PreferencesContext';

export default function TabLayout() {
	const { theme } = usePreferences();

	return (
		<Tabs
			screenOptions={{
				headerShown: true,

				headerTitle: 'Kiro',
				headerTitleAlign: 'left',

				headerStyle: {
					backgroundColor: theme.background,
				},

				headerTintColor: theme.foreground,

				tabBarStyle: {
					backgroundColor: theme.background,
				},

				tabBarActiveTintColor: theme.foreground,
				tabBarInactiveTintColor: `${theme.foreground}66`,
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Stories',
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='book-outline'
							size={size}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name='about'
				options={{
					title: 'About',
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='information-circle-outline'
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
