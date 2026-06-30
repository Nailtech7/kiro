import React from 'react';
import Animated, { useAnimatedProps } from 'react-native-reanimated';
import { Circle } from 'react-native-svg';
import { useInfiniteFloat } from '../hooks/useInfiniteFloat';
import type { StarData } from '../types';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface StarProps {
  star: StarData;
}

/**
 * A single twinkling star.
 *
 * Rendered as a bare <Circle> (no wrapping <Svg>/<View> of its own) so that
 * 40 of these can live as children inside the one shared <Svg> canvas in
 * <Stars />. That's far cheaper than mounting 40 separate native view trees,
 * and keeps the whole field as a single draw call.
 */
function Star({ star }: StarProps) {
  const opacity = useInfiniteFloat({
    fromValue: star.baseOpacity,
    toValue: 1,
    duration: star.twinkleDuration,
    delay: star.twinkleDelay,
  });

  // SVG opacity is a prop, not a style — useAnimatedProps (not
  // useAnimatedStyle) is the correct bridge for animating it on the UI
  // thread via react-native-svg's Animated-wrapped Circle.
  const animatedProps = useAnimatedProps(() => ({
    opacity: opacity.value,
  }));

  return (
    <AnimatedCircle cx={star.x} cy={star.y} r={star.radius} fill="#FFFFFF" animatedProps={animatedProps} />
  );
}

export default React.memo(Star);
