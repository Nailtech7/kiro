import { Dimensions } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
	Dimensions.get('window');

/* -------------------------------------------------------------------------- */
/* Gradient                                                                    */
/* -------------------------------------------------------------------------- */

// `as const` keeps these as fixed-length tuples, matching the type
// `expo-linear-gradient` expects for its `colors` prop.
export const NIGHT_GRADIENT_COLORS = ['#07152B', '#123A72', '#325A96'] as const;
export const DAY_GRADIENT_COLORS = ['#58B7FF', '#A7DFFF', '#F6FCFF'] as const;

/* -------------------------------------------------------------------------- */
/* Stars (night background)                                                        */
/* -------------------------------------------------------------------------- */

export const STAR_COUNT = 40;

// Most stars read as tiny pinpricks of light; a few are slightly larger
// focal points so the field doesn't look uniform/artificial.
export const STAR_MIN_RADIUS = 0.6;
export const STAR_MAX_RADIUS = 1.8;

// Stars never fully disappear at their dimmest — a sky going fully black
// reads as "broken" rather than "subtle".
export const STAR_MIN_OPACITY = 0.35;
export const STAR_MAX_OPACITY = 1;

// Wide duration range + per-star random delay is what prevents the field
// from blinking in unison.
export const STAR_MIN_TWINKLE_DURATION = 2000;
export const STAR_MAX_TWINKLE_DURATION = 6000;
export const STAR_MAX_TWINKLE_DELAY = 4000;

/* -------------------------------------------------------------------------- */
/* Sun (day background)                                                            */
/* -------------------------------------------------------------------------- */

export const SUN_SIZE = 120;
export const SUN_TOP = 90;
export const SUN_RIGHT = 40;

export const SUN_FLOAT_DISTANCE = 6; // px — very gentle, barely perceptible
export const SUN_FLOAT_DURATION = 12000; // ms, one direction (full cycle = 24s)

export const SUN_SCALE_FROM = 1;
export const SUN_SCALE_TO = 1.03;

/* -------------------------------------------------------------------------- */
/* Clouds (both backgrounds)                                                       */
/* -------------------------------------------------------------------------- */

export const CLOUD_COUNT = 6; // within the requested 5–7 range

export const CLOUD_MIN_OPACITY = 0.18;
export const CLOUD_MAX_OPACITY = 0.45;

export const CLOUD_MIN_WIDTH = 140;
export const CLOUD_MAX_WIDTH = 260;

export const CLOUD_BASE_HEIGHT = 160;
export const CLOUD_BASE_WIDTH = 90;

// Clouds stay in the upper portion of the screen so they read as sky, not as
// set-dressing colliding with foreground glass cards lower down.
export const CLOUD_MIN_TOP_PERCENT = 0.04;
export const CLOUD_MAX_TOP_PERCENT = 0.5;

// Reference speeds from the spec (ms for one full traversal). Each generated
// cloud is assigned a duration sampled around one of these anchors, so the
// sky keeps a believable mix of slow/medium/fast drifters built from the
// exact speeds requested.
export const CLOUD_REFERENCE_DURATIONS = [120000, 150000, 90000] as const;

// Staggers entrances over the first minute so the sky doesn't look empty
// while every cloud is still off-screen waiting for its first pass.
export const CLOUD_MAX_START_DELAY = 60000;

/* -------------------------------------------------------------------------- */
/* Random helpers                                                             */
/* -------------------------------------------------------------------------- */

/** Random float in [min, max]. */
export const randomBetween = (min: number, max: number): number =>
	Math.random() * (max - min) + min;

/** Random integer in [min, max], inclusive. */
export const randomInt = (min: number, max: number): number =>
	Math.floor(randomBetween(min, max + 1));

/** Picks a random entry from a readonly array. */
export const randomItem = <T>(items: readonly T[]): T =>
	items[randomInt(0, items.length - 1)];
