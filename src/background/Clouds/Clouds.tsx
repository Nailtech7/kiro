import React, { useMemo } from 'react';
import Cloud from './Cloud';
import type { CloudData } from '../types';
import {
	CLOUD_COUNT,
	CLOUD_MAX_OPACITY,
	CLOUD_MAX_START_DELAY,
	CLOUD_MAX_TOP_PERCENT,
	CLOUD_MAX_WIDTH,
	CLOUD_MIN_OPACITY,
	CLOUD_MIN_TOP_PERCENT,
	CLOUD_MIN_WIDTH,
	CLOUD_REFERENCE_DURATIONS,
	SCREEN_HEIGHT,
	randomBetween,
	randomItem,
} from '../constants';

function generateClouds(count: number): CloudData[] {
	return Array.from({ length: count }, (_, id) => {
		const width = randomBetween(CLOUD_MIN_WIDTH, CLOUD_MAX_WIDTH);

		// Each cloud's speed is sampled within +/-15% of one of the three
		// reference durations from the spec (90s / 120s / 150s), so the exact
		// requested speeds are preserved while every cloud still feels unique.
		const referenceDuration = randomItem(CLOUD_REFERENCE_DURATIONS);

		return {
			id,
			width,
			height: width * 0.6,
			top:
				randomBetween(CLOUD_MIN_TOP_PERCENT, CLOUD_MAX_TOP_PERCENT) *
				SCREEN_HEIGHT,
			// Smaller + more transparent clouds read as "further away", which is
			// what creates the requested sense of depth across the layer.
			opacity: randomBetween(CLOUD_MIN_OPACITY, CLOUD_MAX_OPACITY),
			duration: randomBetween(
				referenceDuration * 0.85,
				referenceDuration * 1.15,
			),
			delay: randomBetween(0, CLOUD_MAX_START_DELAY),
		};
	});
}

/**
 * Layer 3 (both backgrounds) — the full cloud layer.
 *
 * Cloud configs are generated exactly once per mount; each <Cloud /> then
 * drives its own drift animation independently and at its own pace.
 */
function Clouds() {
	const clouds = useMemo(() => generateClouds(CLOUD_COUNT), []);

	return (
		<>
			{clouds.map((cloud) => (
				<Cloud
					key={cloud.id}
					cloud={cloud}
				/>
			))}
		</>
	);
}

export default React.memo(Clouds);
