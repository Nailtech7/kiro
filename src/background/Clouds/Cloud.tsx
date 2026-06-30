import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import Svg, { Ellipse } from 'react-native-svg';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { SCREEN_WIDTH } from '../constants';
import type { CloudData } from '../types';

interface CloudProps {
  cloud: CloudData;
}

/**
 * A single soft cloud shape, built from four overlapping translucent
 * ellipses rather than one flat blob — that overlap is what reads as a
 * puffy, organic silhouette without needing image assets or SVG filters.
 */
function Cloud({ cloud }: CloudProps) {
  // Both ends of the journey sit fully outside the viewport, which is what
  // makes the loop reset in useInfiniteScroll invisible to the user.
  const startX = SCREEN_WIDTH + cloud.width;
  const endX = -cloud.width * 2;

  const translateX = useInfiniteScroll({
    startX,
    endX,
    duration: cloud.duration,
    delay: cloud.delay,
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const w = cloud.width;
  const h = cloud.height;

  // Puff geometry expressed as fractions of the bounding box, so the same
  // silhouette scales cleanly to whatever width/height this instance got.
  const puffs = useMemo(
    () => [
      { cx: w * 0.3, cy: h * 0.6, rx: w * 0.3, ry: h * 0.4 },
      { cx: w * 0.55, cy: h * 0.45, rx: w * 0.34, ry: h * 0.46 },
      { cx: w * 0.78, cy: h * 0.58, rx: w * 0.24, ry: h * 0.36 },
      { cx: w * 0.5, cy: h * 0.7, rx: w * 0.45, ry: h * 0.32 },
    ],
    [w, h],
  );

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.wrapper, { top: cloud.top, width: w, height: h, opacity: cloud.opacity }, animatedStyle]}
    >
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        {puffs.map((puff, index) => (
          <Ellipse key={index} cx={puff.cx} cy={puff.cy} rx={puff.rx} ry={puff.ry} fill="#FFFFFF" />
        ))}
      </Svg>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
  },
});

export default React.memo(Cloud);
