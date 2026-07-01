import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DAY_GRADIENT_COLORS } from '../constants';

/**
 * Layer 1 — static base gradient for the day background.
 *
 * Same role as NightGradient: a still canvas with no animation of its own,
 * so the sun and clouds read clearly against it.
 */
function DayGradient() {
	return (
		<LinearGradient
			colors={DAY_GRADIENT_COLORS}
			locations={[0, 0.5, 1]}
			start={{ x: 0.5, y: 0 }}
			end={{ x: 0.5, y: 1 }}
			style={StyleSheet.absoluteFill}
		/>
	);
}

export default React.memo(DayGradient);
