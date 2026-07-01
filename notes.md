# folder structure

src/
│
├── app/
│ │
│ ├── (tabs)/
│ │ ├── \_layout.tsx
│ │ └── index.tsx
│ │
│ ├── reader/
│ │ └── [id].tsx
│ │
│ ├── drawing/
│ │ └── [id].tsx ← Drawing screen
│ │
│ └── \_layout.tsx
│
├── background/
│
├── components/
│ ├── Header.tsx
│ ├── HomeMenu.tsx
│ ├── MenuButton.tsx
│ ├── StoryTile.tsx
│ ├── StoryList.tsx
│ └── ThemeMenu.tsx
│
├── context/
│
├── data/
│ └── stories.ts
│
├── drawing/
│ ├── DrawingCanvas.tsx
│ ├── DrawingToolbar.tsx (optional later)
│ ├── DrawingStorage.ts
│ ├── types.ts
│ ├── hooks/
│ │ ├── useDrawing.ts
│ │ └── useUndoRedo.ts
│ └── utils/
│ ├── exportImage.ts
│ └── paths.ts
│
├── theme/
│
└── utils/

DrawingScreen
│
├── Existing Header (reuse)
│
├── DrawingCanvas
│
├── Moral
│
├── Footer
│ ├── Date
│ └── Share
│
└── AutoSave

Device

├── drawings/
│ 1.png
│ 4.png
│ 7.png
│
└── AsyncStorage
storyId -> imageUri

# screens

┌─────────────────────────────────────┐
│ Kiro ↶ ↷ ✕ ☰ │
├─────────────────────────────────────┤
│ │
│ │
│ Drawing Canvas │
│ (square, full width) │
│ │
│ │
├─────────────────────────────────────┤
│ │
│ "Kindness is never wasted." │
│ │
├─────────────────────────────────────┤
│ Kiro 11.2 Share │
└─────────────────────────────────────┘

# drawing canvas

## the plan

I think this is the strongest feature in Kiro because it transforms the app from a story reader into a story journal. It demonstrates frontend engineering, UI/UX, and product thinking all at once.

I would treat it as a separate subsystem rather than “just another screen.”

⸻

Phase 1 — Drawing Experience

The Reader has two modes:

Reading Mode
↓
Drawing Mode

The canvas appears over the story (or replaces it temporarily), with a very simple toolbar:

- Pen
- Undo
- Redo
- Clear
- Done

No colors.

No brush sizes.

No shapes.

The simpler it is, the more polished it feels.

⸻

Phase 2 — Data Model

Each story can have one drawing.

Conceptually:

Story
id: 5
↓
Drawing
storyId: 5
imageUri: ...
createdAt: ...
updatedAt: ...

Store only what you need.

No history.

No multiple pages.

⸻

Phase 3 — Persistence

This should be completely offline.

When the child taps Done:

Canvas
↓
Export image
↓
Save locally
↓
Store URI
↓
Done

The next time the story opens:

storyId
↓
lookup drawing
↓
display drawing

⸻

Phase 4 — StoryTile

This is where the feature becomes memorable.

Instead of

🐶
The Fox and the Crow

it becomes

Tiny drawing thumbnail
The Fox and the Crow

If no drawing exists

↓

show the normal icon.

If drawing exists

↓

show the artwork.

Now every story becomes personal.

⸻

Phase 5 — Reader

When opening a story that already has artwork

show a tiny button

Drawing

or

Sketch

Tapping it opens the canvas with the previous drawing already loaded.

⸻

Phase 6 — Share

This is where I’d avoid simply sharing the drawing.

Instead generate a keepsake card.

+----------------------------+
THE LION & THE MOUSE
(child's drawing)
"Kindness is never wasted."
July 2, 2026
Kiro
+----------------------------+

That is something parents will actually send.

⸻

Phase 7 — Drawing Style

I would intentionally make it look like a crayon or pencil.

Not vector-perfect.

Slight texture.

Slight transparency.

It fits the storybook feel.

⸻

Storage

Everything stays local.

No backend.

No authentication.

The app simply remembers

Story 1
↓
Drawing URI

Very lightweight.

⸻

UI Flow

Home
↓
Story
↓
Read
↓
Draw
↓
Done
↓
Story updated
↓
Home
↓
Thumbnail appears

The feedback loop is immediate.

⸻

What NOT to build

I wouldn’t add

- stickers
- colors
- layers
- eraser types
- paint bucket
- zoom
- shape tools

That turns it into a drawing app.

Kiro should remain a reading app.

⸻

Engineering Breakdown

From a frontend perspective, this feature naturally splits into five independent pieces:

1. Canvas

Only responsible for strokes.

Nothing else.

⸻

2. Toolbar

Only responsible for

- Undo
- Redo
- Clear
- Save

No drawing logic.

⸻

3. Storage

Only responsible for

saveDrawing()
getDrawing()
deleteDrawing()

The UI shouldn’t care where it’s stored.

⸻

4. StoryTile

Checks

Does this story have artwork?

Yes

↓

show thumbnail.

No

↓

show emoji.

⸻

5. Share Generator

Responsible for producing the keepsake.

Nothing else.

⸻

Future Expansion

Once this system exists, adding features becomes easy.

For example

Story
↓
Drawing
↓
Voice recording
↓
Parent notes
↓
Date completed

Every story becomes a memory.

⸻

One suggestion I’d make

I wouldn’t market it as a drawing feature.

I’d market it as a Story Journal.

The drawing is simply one part of it.

Over time, each story accumulates memories:

- Read on: July 2
- Child’s drawing
- Favorite status
- Maybe even a voice recording from a parent in a future version

That framing makes the feature feel much more intentional and gives Kiro a unique identity beyond being another offline storybook app.

## working flow

ReaderScreen

↓

Open DrawingCanvas

↓

User draws

↓

Done

↓

imageUri returned

↓

ReaderScreen saves it

# Story reader tts

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

# DYNAMIC WALL PAPER - done

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
