export interface Story {
	id: string;
	title: string;
	animal: string;
	category: string;
	content: string;
	moral: string;
}

export const stories: Story[] = [
	{
		id: '1',
		title: 'The Tortoise and the Hare',
		animal: '🐢',
		category: 'classic',
		content: `Once upon a time, in a lush green meadow, there lived a hare who was very proud of how fast he could run.

He would often tease the other animals for being so slow. "No one can beat me!" he would boast. "I am the fastest creature in all the land."

One day, a quiet old tortoise had heard enough. "I challenge you to a race," said the tortoise in a calm, steady voice.

The hare burst out laughing. "You? Race me? This will be the funniest thing anyone has ever seen!"

The next morning, all the animals gathered at the starting line. A fox was chosen as the judge. At the signal, the hare shot off like an arrow, while the tortoise began his slow, deliberate march.

The hare looked back and could barely see the tortoise in the distance. "I have so much time," he thought. He sat down under a shady oak tree. "I'll rest a while and still win easily."

The warm sun and soft breeze made him drowsy. Before long, the hare was fast asleep.

Meanwhile, the tortoise kept walking. One steady step after another, never stopping, never looking back. He passed the sleeping hare without making a sound.

When the hare finally woke up and stretched, he spotted the tortoise crossing the finish line. The crowd erupted in cheers.

The hare ran as fast as he could, but it was too late. The tortoise had won.`,
		moral:
			'Slow and steady wins the race. Consistency and determination will outpace arrogance and complacency.',
	},
	{
		id: '2',
		title: 'The Lion and the Mouse',
		animal: '🦁',
		category: 'classic',
		content: `Deep in the heart of the jungle, a great lion lay sleeping in the afternoon heat. The ground trembled gently with each breath he took.

A small mouse, scurrying through the grass in search of seeds, did not notice the lion until it was too late. She ran straight across the lion's nose.

The lion woke with a roar and slapped his enormous paw over the tiny mouse, trapping her on the ground.

"How dare you disturb my sleep!" the lion growled, bringing his face close to the trembling mouse. "I should eat you for this."

"Please, great lion," squeaked the mouse, her heart hammering. "Spare me, and one day I promise I will repay you."

The lion stared at her for a long moment, then let out a deep, rumbling laugh. "You? Repay me? What could a tiny creature like you ever do for the king of the jungle?" But he was in a good mood, and the mouse amused him. He lifted his paw and let her go.

The mouse ran, not stopping until she was safely hidden in the roots of a tree.

Weeks later, the lion was prowling the jungle when he walked straight into a hunter's net. Ropes tangled around him from every direction. He roared and thrashed, but the more he struggled, the tighter the net pulled. His great strength was useless.

The mouse heard his cries from far away. She recognised that voice. She ran toward the sound without hesitating.

When she found the lion tangled in the net, she got to work immediately — gnawing through the thick ropes with her sharp little teeth, one cord at a time. Within minutes, the lion was free.

He looked down at the mouse, his expression softer than she had ever seen.

"I laughed when you said you would repay me," he said quietly. "I was wrong."`,
		moral:
			'No act of kindness, however small, is ever wasted. Even the mighty may need help from the humble.',
	},
	{
		id: '3',
		title: 'The Boy Who Cried Wolf',
		animal: '🐺',
		category: 'classic',
		content: `On the slopes of a green hill at the edge of a village, a young shepherd boy watched over a flock of sheep every day.

It was quiet work. The sheep grazed peacefully, the sky stretched wide and blue above him, and nothing much ever happened. The boy grew bored.

One afternoon, just for something to do, he ran down toward the village shouting at the top of his lungs. "Wolf! Wolf! A wolf is attacking the sheep!"

The villagers dropped everything and sprinted up the hill, armed with sticks and rakes, ready to protect the flock. When they arrived, breathless and worried, they found the boy doubled over laughing.

"There's no wolf," he wheezed. "I was only joking."

The villagers were annoyed, but they went back to their work without saying much.

A few weeks later, bored again, the boy did the same thing. "Wolf! Wolf!" The villagers came running once more, and once more there was no wolf — only the laughing boy. This time, they left the hill in angry silence.

Then, one grey afternoon, a real wolf crept out of the treeline. It was large and lean, eyes fixed on the scattered sheep. The boy's heart hammered in his chest. He ran to the edge of the hill and screamed with everything he had.

"Wolf! Please, there really is a wolf! Help!"

Down in the village, the people heard him. They looked at each other. Some shrugged and returned to what they were doing. Others hesitated, then stayed where they were.

No one came.

When the boy finally returned to the village at dusk, the flock was scattered and several sheep were gone.

An old farmer put a hand on the boy's shoulder. "We didn't know whether to believe you," he said simply.`,
		moral:
			'Honesty is a trust you build slowly and lose quickly. When you lie, people stop listening — even when the truth matters most.',
	},
];
