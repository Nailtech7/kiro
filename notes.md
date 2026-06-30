I’d think of it as three independent systems that work together.

1. Speech Engine

Responsible only for:

- Start
- Pause
- Resume
- Stop
- Know when it’s finished

It doesn’t know anything about React, the UI, or highlighting.

You could later swap the implementation (device TTS → AI voice) without changing the Reader UI.

⸻

2. Reader State

The Reader screen owns the playback state.

Something like:

Idle
Reading
Paused
Finished

The speaker button simply changes this state.

Example flow:

Speaker
↓
Idle
↓
Reading
↓
Paused
↓
Reading
↓
Finished
↓
Idle

The icon changes based on this state.

⸻

3. Story Renderer

This part only worries about displaying text.

It receives:

- current sentence index

and renders

Sentence 1
Sentence 2 ← highlighted
Sentence 3
Sentence 4

It knows nothing about speech.

⸻

The difficult part

How do you know which sentence is being spoken?

This is where there are two approaches.

⸻

Option A — Split the story into sentences

Instead of rendering

story.content

you convert it into

[
"The fox was hungry.",
"He saw some grapes.",
"They were too high.",
"He walked away."
]

Now the Reader can render each sentence individually.

⸻

When speech reaches sentence 2

highlightIndex = 1

The UI updates automatically.

⸻

I like this approach because it also opens the door to:

- sentence tapping
- bookmarks
- translations
- quizzes

⸻

Ideal

The TTS engine tells you

I’m speaking sentence 5.

You update

highlightIndex = 5

Done.

⸻

More realistic

You tell the engine

Speak sentence 1.

Wait until finished.

Then

Speak sentence 2.

Wait until finished.

Then

Speak sentence 3.

…

This gives you perfect synchronization.

I actually prefer this.

⸻

The flow becomes

Sentence 1
↓
finished
↓
highlight sentence 2
↓
speak sentence 2
↓
finished
↓
highlight sentence 3

Simple.

Reliable.

⸻

Pause

If the user presses

🔊

while reading

pause()

Everything freezes.

Current sentence stays highlighted.

⸻

Press again

resume()

Continue.

⸻

Auto scroll

I’d add this.

Whenever

highlightIndex

changes

↓

ScrollView scrolls just enough

↓

Current sentence stays roughly in the center.

Very Kindle-like.

⸻

End of story

Speech finishes.

highlightIndex = null
state = idle
speaker icon
↓
normal

No dialogs.

No toast.

Just stop.

⸻

Architecture I’d use

ReaderScreen
│
├── ReaderMenu
│ └── Speaker Button
│
├── StoryRenderer
│ ├── sentence 0
│ ├── sentence 1
│ ├── sentence 2
│ └── ...
│
└── SpeechController
│
├── currentSentence
├── readingState
└── device TTS

The important design decision is to treat the story as a sequence of sentences rather than one block of text. Even if you don’t implement highlighting immediately, that representation makes read-aloud, auto-scroll, sentence tapping, and future educational features much easier to build.

#feature impack

dynamic wallpaper
Instead of saying

Dynamic wallpaper

I’d say

Immersive Environment Engine

or

Context-aware immersive backgrounds inspired by Apple Weather.

## That sounds like a system rather than a cosmetic effect.

# DYNAMIC WALL PAPER

## tips

Animation Library

Avoid React Native’s basic Animated API for this.

Use:

- react-native-reanimated for smooth UI-thread animations.
- react-native-svg for vector clouds, stars, sun, and moon.
- expo-linear-gradient for the sky.
- react-native-skia later if you want more advanced effects like procedural clouds, glow, blur, or shaders.

⸻

Performance Tips

- Keep each layer independent so React doesn’t re-render the whole background.
- Memoize decorative components (React.memo).
- Animate with Reanimated shared values on the UI thread.
- Reuse particle components instead of constantly creating/removing them.
- Use SVGs instead of large PNGs where possible.
- Limit particle counts (e.g., 20–40) since subtle motion is more convincing than density.

⸻

A good milestone plan is:

1. Phase 1: Sky gradient (day/night) with smooth transitions.
2. Phase 2: Floating sun and moon.
3. Phase 3: Three cloud layers with different speeds (parallax).
4. Phase 4: Stars, twinkling, and shooting stars for night.
5. Phase 5: Haze, dust, fireflies, rain, and snow effects.
6. Phase 6: Add the foreground frosted-glass cards that sit above this animated background.

This incremental approach p
