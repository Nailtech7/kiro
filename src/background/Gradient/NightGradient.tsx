import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NIGHT_GRADIENT_COLORS } from '../constants';

/**
 * Layer 1 — static base gradient for the night background.
 *
 * Deliberately has no animation: it's the still canvas that stars and
 * clouds move across. Keeping it motionless gives the rest of the motion
 * somewhere calm to live, instead of everything competing for attention.
 */
function NightGradient() {
	return (
		<LinearGradient
			colors={NIGHT_GRADIENT_COLORS}
			locations={[0, 0.5, 1]}
			start={{ x: 0.5, y: 0 }}
			end={{ x: 0.5, y: 1 }}
			style={StyleSheet.absoluteFill}
		/>
	);
}

export default React.memo(NightGradient);
