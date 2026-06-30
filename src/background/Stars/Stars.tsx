import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Svg from 'react-native-svg';
import Star from './Star';
import type { StarData } from '../types';
import {
	SCREEN_HEIGHT,
	SCREEN_WIDTH,
	STAR_COUNT,
	STAR_MAX_OPACITY,
	STAR_MAX_RADIUS,
	STAR_MAX_TWINKLE_DELAY,
	STAR_MAX_TWINKLE_DURATION,
	STAR_MIN_OPACITY,
	STAR_MIN_RADIUS,
	STAR_MIN_TWINKLE_DURATION,
	randomBetween,
} from '../constants';

function generateStars(count: number): StarData[] {
	return Array.from({ length: count }, (_, id) => ({
		id,
		x: randomBetween(0, SCREEN_WIDTH),
		y: randomBetween(0, SCREEN_HEIGHT),
		radius: randomBetween(STAR_MIN_RADIUS, STAR_MAX_RADIUS),
		// Resting opacity is capped below full brightness so every star still
		// has somewhere to twinkle *up* to (see Star.tsx / useInfiniteFloat).
		baseOpacity: randomBetween(STAR_MIN_OPACITY, STAR_MAX_OPACITY * 0.8),
		twinkleDuration: randomBetween(
			STAR_MIN_TWINKLE_DURATION,
			STAR_MAX_TWINKLE_DURATION,
		),
		twinkleDelay: randomBetween(0, STAR_MAX_TWINKLE_DELAY),
	}));
}

/**
 * Layer 2 (night background) — the full star field.
 *
 * Star positions/sizes/timings are generated exactly once per mount
 * (useMemo with an empty dep array) and never recomputed on re-render —
 * only each star's opacity animates afterwards, independently, on the UI
 * thread.
 */
function Stars() {
	const stars = useMemo(() => generateStars(STAR_COUNT), []);

	return (
		<Svg
			pointerEvents='none'
			style={StyleSheet.absoluteFillObject}
			width={SCREEN_WIDTH}
			height={SCREEN_HEIGHT}
		>
			{stars.map((star) => (
				<Star
					key={star.id}
					star={star}
				/>
			))}
		</Svg>
	);
}

export default React.memo(Stars);
