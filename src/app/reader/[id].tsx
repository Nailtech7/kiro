import AppIcon from '@/components/AppIcon';
import AppText from '@/components/AppText';
import ThemeToggle from '@/components/SimpleThemeToggle';
import { usePreferences } from '@/context/PreferencesContext';
import { stories } from '@/data/stories';
import {
	FontId,
	fonts,
	fontSizeMax,
	fontSizeMin,
	fontSizeStep,
} from '@/theme/fonts';
import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useMemo, useRef } from 'react';
import {
	Animated,
	NativeScrollEvent,
	NativeSyntheticEvent,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HIDE_THRESHOLD = 60; // px scrolled down before controls hide
const SHOW_THRESHOLD = 10; // px scrolled up before controls reappear
const IDLE_DELAY = 1000; // ms of stillness before controls fade

export default function ReaderScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const {
		theme,
		fontId,
		setFont,
		fontSize,
		setFontSize,
		favourites,
		toggleFavourite,
	} = usePreferences();

	const story = useMemo(() => stories.find((s) => s.id === id), [id]);

	// ── Animated opacity refs ────────────────────────────────────────────────
	const overlayOpacity = useRef(new Animated.Value(1)).current;
	const lastScrollY = useRef(0);
	const scrolledDown = useRef(0); // net downward displacement since last show
	const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
	const isVisible = useRef(true);

	const fadeIn = useCallback(() => {
		if (isVisible.current) return;
		isVisible.current = true;
		Animated.timing(overlayOpacity, {
			toValue: 1,
			duration: 250,
			useNativeDriver: true,
		}).start();
	}, [overlayOpacity]);

	const fadeOut = useCallback(() => {
		if (!isVisible.current) return;
		isVisible.current = false;
		Animated.timing(overlayOpacity, {
			toValue: 0,
			duration: 350,
			useNativeDriver: true,
		}).start();
	}, [overlayOpacity]);

	const resetIdleTimer = useCallback(() => {
		if (idleTimer.current) clearTimeout(idleTimer.current);
		idleTimer.current = setTimeout(fadeOut, IDLE_DELAY);
	}, [fadeOut]);

	const handleScroll = useCallback(
		(e: NativeSyntheticEvent<NativeScrollEvent>) => {
			const y = e.nativeEvent.contentOffset.y;
			const delta = y - lastScrollY.current;
			lastScrollY.current = y;

			if (delta > 0) {
				// Scrolling down — accumulate displacement
				scrolledDown.current += delta;
				if (scrolledDown.current >= HIDE_THRESHOLD) {
					// Clear any pending idle timer — we're actively scrolling down
					if (idleTimer.current) clearTimeout(idleTimer.current);
					fadeOut();
				}
			} else {
				// Scrolling up — reset downward counter and show immediately
				scrolledDown.current = 0;
				if (Math.abs(delta) >= SHOW_THRESHOLD) {
					if (idleTimer.current) clearTimeout(idleTimer.current);
					fadeIn();
				}
			}
		},
		[fadeIn, fadeOut],
	);

	const handleScrollEndDrag = useCallback(() => {
		// User lifted finger — start idle countdown if controls are visible
		if (isVisible.current) {
			resetIdleTimer();
		}
	}, [resetIdleTimer]);

	// ── Font cycling ─────────────────────────────────────────────────────────
	const fontIds = useMemo(() => Object.keys(fonts) as FontId[], []);
	const handleNextFont = useCallback(() => {
		const nextIndex = (fontIds.indexOf(fontId) + 1) % fontIds.length;
		setFont(fontIds[nextIndex]);
	}, [fontId, fontIds, setFont]);

	// ── Guard ────────────────────────────────────────────────────────────────
	if (!story) {
		return (
			<SafeAreaView
				style={[styles.root, { backgroundColor: theme.background }]}
			>
				<AppText>Story not found.</AppText>
			</SafeAreaView>
		);
	}

	const currentFont = fonts[fontId] || fonts['default'];
	const isFavourite = favourites.includes(story.id);

	console.log('fontId:', fontId);
	console.log('available:', Object.keys(fonts));

	return (
		<View style={[styles.root, { backgroundColor: theme.background }]}>
			{/* ── Full-screen scrollable content ── */}
			<ScrollView
				contentContainerStyle={styles.content}
				showsVerticalScrollIndicator={false}
				scrollEventThrottle={16}
				onScroll={handleScroll}
				onScrollEndDrag={handleScrollEndDrag}
				onMomentumScrollEnd={handleScrollEndDrag}
			>
				<AppText
					style={[
						styles.title,
						{
							fontSize: fontSize + 10,
							lineHeight: (fontSize + 10) * 1.3,
						},
					]}
				>
					{story.title}
				</AppText>

				<AppText
					style={[
						styles.animal,
						{
							fontSize: fontSize * 2,
						},
					]}
				>
					{story.animal}
				</AppText>

				<AppText
					style={{
						lineHeight: fontSize * 1.75,
						fontSize: fontSize,
					}}
				>
					{story.content}
				</AppText>

				<AppText
					style={[
						styles.moralTitle,
						{
							fontSize: fontSize - 1,
						},
					]}
				>
					Moral
				</AppText>

				<AppText
					style={{
						fontSize: fontSize - 1,
						lineHeight: (fontSize - 1) * 1.75,
						fontFamily: currentFont.bodyItalic,
					}}
				>
					{story.moral}
				</AppText>
			</ScrollView>

			{/* ── Absolutely positioned overlays (opacity only) ── */}
			<Animated.View
				style={[StyleSheet.absoluteFill, { opacity: overlayOpacity }]}
				pointerEvents='box-none'
			>
				{/* Back button — top-left */}
				<SafeAreaView
					style={styles.backWrapper}
					pointerEvents='box-none'
				>
					<TouchableOpacity
						onPress={() => router.back()}
						hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
						style={styles.backButton}
					>
						<AppText>back</AppText>
					</TouchableOpacity>
				</SafeAreaView>

				{/* Vertical control stack — bottom-right */}
				<SafeAreaView
					style={styles.controlsWrapper}
					pointerEvents='box-none'
				>
					<View
						style={styles.controls}
						pointerEvents='box-none'
					>
						{/* Favourite */}
						<TouchableOpacity
							onPress={() => toggleFavourite(story.id)}
							hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
							style={styles.controlItem}
						>
							<AppIcon name={isFavourite ? 'heart' : 'heart-outline'} />
						</TouchableOpacity>

						{/* Theme toggle */}
						<View style={styles.controlItem}>
							<ThemeToggle />
						</View>

						{/* Font cycle */}
						<TouchableOpacity
							onPress={handleNextFont}
							hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
							style={styles.controlItem}
						>
							<AppIcon name='text' />
						</TouchableOpacity>

						{/* Font size + */}
						<TouchableOpacity
							onPress={() =>
								setFontSize(Math.min(fontSizeMax, fontSize + fontSizeStep))
							}
							hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
							style={styles.controlItem}
						>
							<AppIcon name='add-circle-outline' />
						</TouchableOpacity>

						{/* Font size − */}
						<TouchableOpacity
							onPress={() =>
								setFontSize(Math.max(fontSizeMin, fontSize - fontSizeStep))
							}
							hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
							style={styles.controlItem}
						>
							<AppIcon name='remove-circle-outline' />
						</TouchableOpacity>
					</View>
				</SafeAreaView>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
	content: {
		paddingTop: 92, // clear the back button
		paddingBottom: 60, // clear the floating controls
		paddingHorizontal: 24,
	},
	title: {
		fontWeight: '700',
		marginBottom: 8,
	},
	animal: {
		fontSize: 44,
		marginBottom: 20,
	},
	moralTitle: {
		fontSize: 15,
		fontWeight: '700',
		letterSpacing: 0.8,
		textTransform: 'uppercase',
		marginTop: 40,
		marginBottom: 10,
		opacity: 0.5,
	},
	// Back button overlay - samae as logo
	backWrapper: {
		position: 'absolute',
		top: 0,
		left: 0,
	},
	backButton: {
		paddingLeft: 24,
		paddingTop: 28,
		paddingBottom: 12,
	},
	// Vertical controls overlay
	controlsWrapper: {
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
	controls: {
		paddingRight: 20,
		paddingBottom: 24,
		alignItems: 'center',
		gap: 20,
	},
	controlItem: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});
