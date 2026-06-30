import { usePreferences } from '@/context/PreferencesContext';
import { Ionicons } from '@expo/vector-icons';

type AppIconProps = React.ComponentProps<typeof Ionicons>;

export default function AppIcon({ size = 20, color, ...props }: AppIconProps) {
	const { theme } = usePreferences();

	return (
		<Ionicons
			size={size}
			color={color ?? theme.foreground}
			{...props}
		/>
	);
}
