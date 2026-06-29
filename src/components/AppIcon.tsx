import { usePreferences } from '@/context/PreferencesContext';
import { Entypo } from '@expo/vector-icons';

type AppIconProps = React.ComponentProps<typeof Entypo>;

export default function AppIcon({ size = 16, color, ...props }: AppIconProps) {
	const { theme } = usePreferences();

	return (
		<Entypo
			size={size}
			color={color ?? theme.foreground}
			{...props}
		/>
	);
}
