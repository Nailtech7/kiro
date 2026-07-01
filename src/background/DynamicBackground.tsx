import React from 'react';
import { StyleSheet, View } from 'react-native';
import Clouds from './Clouds/Clouds';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants';
import DayGradient from './Gradient/DayGradient';
import NightGradient from './Gradient/NightGradient';
import Stars from './Stars/Stars';
import Sun from './Sun/Sun';
import type { DynamicBackgroundProps } from './types';

/**
 * Full-screen, self-contained animated background.
 *
 * Render order is fixed and intentional:
 *   1. Gradient        — static base color
 *   2. Stars OR Sun     — background-dependent sky body
 *   3. Clouds           — both backgrounds, drawn on top for depth
 *
 * This component owns no foreground content and no layout logic beyond
 * filling the screen. It's designed to sit behind glassmorphism cards
 * rendered separately by the consuming screen — `pointerEvents="none"` at
 * every layer ensures it never intercepts touches meant for that UI.
 *
 * Usage:
 *   <DynamicBackground background="day" />
 *   <DynamicBackground background="night" />
 */

function DynamicBackground({ variant }: DynamicBackgroundProps) {
	const isNight = variant === 'night';
	console.log('width, height', SCREEN_WIDTH, SCREEN_HEIGHT);
	return (
		<View
			style={StyleSheet.absoluteFill}
			pointerEvents='none'
		>
			{isNight ? <NightGradient /> : <DayGradient />}
			{isNight ? <Stars /> : <Sun />}
			<Clouds />
		</View>
	);
}

export default React.memo(DynamicBackground);
