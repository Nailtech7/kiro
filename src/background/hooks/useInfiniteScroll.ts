import { useEffect } from 'react';
import { Easing, useSharedValue, withDelay, withRepeat, withTiming, type SharedValue } from 'react-native-reanimated';

interface UseInfiniteScrollConfig {
  /** Off-screen entry position, in px. */
  startX: number;
  /** Off-screen exit position, in px. */
  endX: number;
  /** Time, in ms, to travel from startX to endX. */
  duration: number;
  /** Optional delay before the first pass — staggers entrances. */
  delay?: number;
}

/**
 * Drives a one-directional horizontal drift from startX to endX. When the
 * animation completes, Reanimated's `withRepeat` resets the shared value
 * back to its starting snapshot (startX) and runs it again.
 *
 * Because both startX and endX are chosen to sit fully outside the visible
 * viewport (see Cloud.tsx), that reset jump happens while the cloud is
 * invisible — which is exactly the "exits screen, restarts from the
 * opposite side, seamlessly" behavior requested: no popping is ever visible
 * on screen.
 */
export function useInfiniteScroll({ startX, endX, duration, delay = 0 }: UseInfiniteScrollConfig): SharedValue<number> {
  const translateX = useSharedValue(startX);

  useEffect(() => {
    translateX.value = withDelay(
      delay,
      withRepeat(withTiming(endX, { duration, easing: Easing.linear }), -1, false),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return translateX;
}
