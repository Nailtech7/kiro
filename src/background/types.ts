export type Background =
	| {
			type: 'color';
			color: string;
	  }
	| {
			type: 'dynamic';
			background: 'day' | 'night';
	  };

export interface DynamicBackgroundProps {
	variant: 'day' | 'night';
}

export interface StarData {
	id: number;
	x: number;
	y: number;
	radius: number;
	/** Resting opacity the star twinkles up from. */
	baseOpacity: number;
	/** Full twinkle cycle duration, in ms. */
	twinkleDuration: number;
	/** Random start offset so stars never blink in sync. */
	twinkleDelay: number;
}

export interface CloudData {
	id: number;
	top: number;
	width: number;
	height: number;
	opacity: number;
	/** Time, in ms, to drift fully across the screen. */
	duration: number;
	/** Random start offset so clouds don't all enter at once. */
	delay: number;
}
