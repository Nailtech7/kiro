import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';
import { useInfiniteFloat } from '../hooks/useInfiniteFloat';
import {
	SUN_FLOAT_DISTANCE,
	SUN_FLOAT_DURATION,
	SUN_RIGHT,
	SUN_SCALE_FROM,
	SUN_SCALE_TO,
	SUN_SIZE,
	SUN_TOP,
} from '../constants';

/**
 * Layer 2 (day background) — a single SVG sun.
 *
 * Built from three concentric radial gradients (outer halo -> warm glow ->
 * white-hot core) rather than an SVG blur filter: filter support is
 * inconsistent across Android/iOS in react-native-svg, while layered radial
 * gradients give an equivalent soft-glow look that renders identically on
 * every platform.
 */
function Sun() {
	const translateY = useInfiniteFloat({
		fromValue: 0,
		toValue: -SUN_FLOAT_DISTANCE,
		duration: SUN_FLOAT_DURATION,
	});

	const scale = useInfiniteFloat({
		fromValue: SUN_SCALE_FROM,
		toValue: SUN_SCALE_TO,
		duration: SUN_FLOAT_DURATION,
	});

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateY: translateY.value }, { scale: scale.value }],
	}));

	// Svg canvas is rendered at 2x the sun's nominal size to leave breathing
	// room for the glow halo without clipping it.
	const canvas = SUN_SIZE * 2;

	const defs = useMemo(
		() => (
			<Defs>
				<RadialGradient
					id='sunHalo'
					cx='50%'
					cy='50%'
					r='50%'
				>
					<Stop
						offset='0%'
						stopColor='#FFE9A8'
						stopOpacity={0.55}
					/>
					<Stop
						offset='100%'
						stopColor='#FFE9A8'
						stopOpacity={0}
					/>
				</RadialGradient>
				<RadialGradient
					id='sunGlow'
					cx='50%'
					cy='50%'
					r='50%'
				>
					<Stop
						offset='0%'
						stopColor='#FFF6DE'
						stopOpacity={0.95}
					/>
					<Stop
						offset='55%'
						stopColor='#FFD56B'
						stopOpacity={0.85}
					/>
					<Stop
						offset='100%'
						stopColor='#FFD56B'
						stopOpacity={0}
					/>
				</RadialGradient>
				<RadialGradient
					id='sunCore'
					cx='50%'
					cy='50%'
					r='50%'
				>
					<Stop
						offset='0%'
						stopColor='#FFFFFF'
						stopOpacity={1}
					/>
					<Stop
						offset='100%'
						stopColor='#FFF3D0'
						stopOpacity={1}
					/>
				</RadialGradient>
			</Defs>
		),
		[],
	);

	return (
		<Animated.View
			pointerEvents='none'
			style={[
				styles.wrapper,
				{ top: SUN_TOP, right: SUN_RIGHT },
				animatedStyle,
			]}
		>
			<Svg
				width={canvas}
				height={canvas}
				viewBox={`0 0 ${canvas} ${canvas}`}
			>
				{defs}
				{/* Outer halo — widest, faintest layer */}
				<Circle
					cx={SUN_SIZE}
					cy={SUN_SIZE}
					r={SUN_SIZE}
					fill='url(#sunHalo)'
				/>
				{/* Warm mid glow */}
				<Circle
					cx={SUN_SIZE}
					cy={SUN_SIZE}
					r={SUN_SIZE * 0.55}
					fill='url(#sunGlow)'
				/>
				{/* Soft white-hot center */}
				<Circle
					cx={SUN_SIZE}
					cy={SUN_SIZE}
					r={SUN_SIZE * 0.22}
					fill='url(#sunCore)'
				/>
			</Svg>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		// The Svg canvas is bigger than SUN_SIZE (see `canvas` above), so the
		// wrapper is pulled back by half that padding to keep the visible core
		// anchored exactly at the requested top/right coordinates.
		marginTop: -SUN_SIZE / 2,
		marginRight: -SUN_SIZE / 2,
	},
});

export default React.memo(Sun);
