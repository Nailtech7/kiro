import { useEffect } from 'react';
import {
  Easing,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

interface UseInfiniteFloatConfig {
  /** Resting value the loop starts and returns to. */
  fromValue?: number;
  /** Peak value reached at the midpoint of each cycle. */
  toValue: number;
  /** Full cycle duration in ms (there AND back). */
  duration: number;
  /** Optional delay before the loop starts — used to desync instances. */
  delay?: number;
}

/**
 * Drives a single shared value through a smooth
 * fromValue -> toValue -> fromValue loop, forever, entirely on the UI thread.
 *
 * Reused for two unrelated-looking but mathematically identical animations:
 *  - the sun's gentle vertical float and its subtle scale "breathing"
 *  - each star's independent opacity twinkle
 *
 * Easing.inOut(sin) is used because it has no hard acceleration or
 * deceleration edge — the motion never "snaps" at the top or bottom of the
 * cycle, which is what keeps everything feeling calm rather than mechanical.
 */
export function useInfiniteFloat({
  fromValue = 0,
  toValue,
  duration,
  delay = 0,
}: UseInfiniteFloatConfig): SharedValue<number> {
  const value = useSharedValue(fromValue);

  useEffect(() => {
    value.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(toValue, { duration: duration / 2, easing: Easing.inOut(Easing.sin) }),
          withTiming(fromValue, { duration: duration / 2, easing: Easing.inOut(Easing.sin) }),
        ),
        -1, // repeat forever
        false,
      ),
    );
    // Each instance owns one fixed animation config for its lifetime.
    // Re-running this on prop changes would restart the loop and break the
    // natural desync between sibling stars/sun instances, so deps are
    // intentionally omitted.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
}
