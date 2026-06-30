import { usePreferences } from '@/context/PreferencesContext';
import { fonts } from '@/theme/fonts';
import { Text, TextProps } from 'react-native';

export default function AppText({ style, ...props }: TextProps) {
	const { fontId, theme } = usePreferences();

	return (
		<Text
			{...props}
			style={[
				{
					fontFamily: fonts[fontId].body,
					color: theme.foreground,
					fontSize: 20,
					fontWeight: '400',
				},
				style,
			]}
		/>
	);
}
