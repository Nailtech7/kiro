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
		category: 'panchatantra',
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
		category: "aesop's fables",
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
		category: 'panchatantra',
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
	{
		id: '4',
		title: 'The Three Brothers and the Princess',
		animal: '👑',
		category: 'vikram-betal',
		content: `King Vikram walked silently through the dark forest with Betal resting on his shoulder. The moon hid behind drifting clouds, and only the sound of rustling leaves broke the silence.

Betal suddenly laughed.

"King Vikram, let me tell you a story. If you know the answer and remain silent, your head will burst into a thousand pieces. But if you speak, I shall fly back to my tree."

The king continued walking.

"In a distant kingdom lived three brothers," Betal began.

"The eldest brother was an expert architect. He could build magnificent palaces unlike anyone else.

The second brother was a skilled warrior. He could defeat even the strongest enemies with courage and skill.

The youngest brother was a brilliant scholar who knew medicine, astronomy, and many ancient sciences."

One day, the king's daughter disappeared from the palace.

After searching everywhere, the brothers discovered that a wicked demon had carried her away to a hidden mountain.

The scholar studied old maps and ancient books until he discovered the demon's secret cave.

The architect designed and built a strong bridge across dangerous cliffs so everyone could safely reach the mountain.

Finally, the warrior fought the demon in a fierce battle and rescued the princess.

The kingdom celebrated for many days.

Soon, a question arose.

Each brother claimed he deserved to marry the princess.

The scholar said, "Without my knowledge, no one would have found her."

The architect replied, "Without my bridge, no one could have reached the cave."

The warrior smiled and said, "Without my courage, the demon would still hold her prisoner."

Betal chuckled.

"Now tell me, O wise King, who truly deserved to marry the princess?"

King Vikram answered without hesitation.

"The warrior."

"Why?" asked Betal.

"The scholar showed the way. The architect made the journey possible. Both performed valuable duties. But the warrior risked his own life to save the princess from immediate danger. His courage completed the rescue."

Betal laughed loudly.

"You have spoken wisely once again!"

With that, he slipped from the king's shoulder and flew back to the haunted tree, forcing Vikram to begin the journey all over again.`,
		moral:
			'Knowledge, planning, and courage all matter, but true bravery often requires risking oneself for others.',
	},
	{
		id: '5',
		title: "The Merchant's Three Sons",
		animal: '💰',
		category: 'vikram-betal',
		content: `As King Vikram carried Betal through the silent forest, the spirit began another tale.

"There once lived a wealthy merchant with three sons.

Before he died, he left each son a bag containing one hundred gold coins.

'I do not care who becomes the richest,' he said. 'I wish to know who uses this money most wisely.'

The eldest son immediately bought expensive clothes, horses, and jewels. People admired his wealth, but soon every coin was gone.

The second son invested all his money into trading spices across the sea. His business grew, and within a few years he became richer than his father had ever been.

The youngest son spent much of his money helping struggling farmers repair their wells and buy better seeds.

The villagers worked hard and soon harvested more crops than ever before.

Grateful for his kindness, they insisted on sharing part of every harvest with him.

Over time, the youngest son also became wealthy, but he had earned the love and respect of thousands of people.

When the merchant's old friend looked at the three brothers, he wondered who had truly used the inheritance best.

Betal asked, "King Vikram, which son was the wisest?"

The king replied, "The youngest."

Betal smiled.

"Even though he did not become rich first?"

Vikram nodded.

"The eldest wasted his fortune. The second multiplied only his own wealth. The youngest improved the lives of many people while also creating lasting prosperity. His wealth grew because others grew with him."

Betal laughed happily.

"Once again, your wisdom forces you to speak!"

Before the king could react, Betal disappeared into the darkness and returned to the old tree, waiting for Vikram to fetch him again.`,
		moral: 'The best success is the kind that helps others succeed as well.',
	},
	{
		id: '6',
		title: 'The Honest Judge',
		animal: '⚖️',
		category: 'vikram-betal',
		content: `King Vikram once again carried Betal across the moonlit forest.

The spirit began another story.

"In a busy town lived an old judge famous for his fairness.

One day, two women arrived carrying a beautiful necklace.

Each claimed it belonged to her.

Neither had witnesses.

Neither could prove ownership.

The townspeople argued for hours but could not decide.

The judge thought quietly before speaking.

'Bring me two silk threads,' he said.

He tied one thread around each woman's wrist and attached both threads to the necklace lying on the table.

'When I count to three, each of you pull as hard as you can.'

The first woman pulled with all her strength.

The second woman immediately let go.

The necklace slid toward the first woman.

Everyone believed she had won.

But the judge smiled.

'The necklace belongs to the second woman.'

The crowd gasped.

The judge explained, 'The true owner cared more about protecting her precious necklace than winning the argument. She released the thread rather than risk breaking it. The other woman cared only about claiming it.'

The thief lowered her head in shame and confessed.

The necklace was returned to its rightful owner.

Betal looked toward King Vikram.

"Tell me, O King, was the judge correct?"

Vikram replied, "Yes."

"How could he be so certain?"

"Because genuine love for something often values its safety above possession. The true owner acted naturally, while the thief acted out of greed."

Betal clapped his hands.

"Another perfect answer! And once again, you have broken your silence."

Laughing through the night, Betal escaped back to the ancient tree while King Vikram turned around to begin his endless task once more.`,
		moral:
			'Wisdom comes from understanding people, not just listening to their words.',
	},
	{
		id: '7',
		title: 'The Ant and the Grasshopper',
		animal: '🐜',
		category: "aesop's fables",
		content: `During the warm days of summer, a hardworking ant carried tiny seeds, grains, and crumbs back to her underground home.

Trip after trip, she worked from sunrise until sunset.

Nearby, a cheerful grasshopper spent his days singing, dancing, and playing his violin.

"Why work so hard?" he laughed.

"Come sing with me!"

The ant smiled.

"I enjoy music too, but winter will come. I must prepare while I can."

The grasshopper laughed again.

"Winter is far away! There is plenty of time."

The days passed.

Leaves turned golden.

The air became colder.

Soon snow covered the fields.

The grasshopper searched everywhere for food.

The flowers had disappeared.

The grass had frozen.

Not a single seed could be found.

Hungry and tired, he knocked on the ant's door.

The ant welcomed him inside and shared a warm meal.

"I am grateful for your kindness," said the grasshopper.

"I have learned that having fun is wonderful, but preparing for tomorrow is important too."

The ant nodded.

"Life is happiest when we make time for both work and play."

The grasshopper spent the rest of winter helping the ants organize their food and promised himself he would prepare better next year.`,

		moral: 'Hard work and planning today make tomorrow much easier.',
	},

	{
		id: '8',
		title: 'The Fox and the Crow',
		animal: '🦊',
		category: 'aesops-fables',
		content: `One bright morning, a crow flew over a village and found a delicious piece of cheese lying outside a baker's shop.

Proud of her lucky find, she carried it high into a tall oak tree where she could enjoy it in peace.

As she settled onto a sturdy branch, a clever fox happened to pass by.

The fox looked up and immediately noticed the cheese.

"What a wonderful breakfast," he thought. "Now, how can I get it without climbing the tree?"

The fox smiled politely.

"Good morning, beautiful Crow!"

The crow looked down but said nothing.

"I have never seen feathers as shiny as yours," continued the fox. "They sparkle in the sunlight like polished jewels."

The crow puffed out her chest proudly.

"And your wings!" said the fox. "They are graceful and strong. Surely a bird as magnificent as you must also have the sweetest singing voice in the forest."

The crow had always wished others would admire her singing.

She forgot all about the cheese in her beak.

She opened her mouth wide to sing her loudest song.

"Cawww!"

Down fell the cheese.

Before it even touched the ground, the fox caught it neatly in his mouth.

He grinned.

"Thank you for the meal."

The embarrassed crow realized she had been tricked.

As the fox walked away, he called back, "Praise is pleasant to hear—but always ask yourself why someone is giving it."

The crow never again let compliments distract her from good judgment.`,
		moral: 'Do not let flattery cloud your judgment.',
	},
	{
		id: '9',
		title: 'The Goose That Laid the Golden Eggs',
		animal: '🪿',
		category: 'aesops-fables',
		content: `A poor farmer and his wife owned a small goose that seemed perfectly ordinary.

One morning, while collecting eggs, the farmer noticed something unusual.

The goose had laid a shining golden egg.

At first, he thought it was painted.

But when he picked it up, he discovered it was made of real gold.

The farmer sold the egg and earned enough money to repair his house and buy better tools.

The next morning, the goose laid another golden egg.

Then another.

Every single day, the farmer became a little richer.

Soon he had plenty of food, warm clothes, and a comfortable home.

But instead of feeling thankful, he became impatient.

"If the goose lays one golden egg every day," he wondered, "she must be full of gold inside. Why should I wait?"

His wife tried to stop him.

"We already have everything we need. Let's be patient."

But the farmer refused to listen.

The next morning, he decided to cut open the goose, believing he would find a treasure inside.

To his surprise, the goose was just like any other goose.

There was no hidden gold.

The farmer realized too late that he had lost the one thing that had made him wealthy.

From that day on, there were no more golden eggs.

He sadly remembered that greed had cost him far more than patience ever would have.`,
		moral: 'Greed often causes people to lose what they already have.',
	},
	{
		id: '12',
		title: 'The Blue Jackal',
		animal: '🦊',
		category: 'panchatantra',
		content: `Once, a hungry jackal wandered into a nearby village searching for food. As he sneaked through the narrow streets, a pack of dogs spotted him and began barking loudly.

The frightened jackal ran as fast as he could. Looking for a place to hide, he jumped into a large barrel inside a dyer's shop.

When the dogs finally left, the jackal climbed out. To his surprise, his entire body had turned a bright blue from the dye.

As he returned to the forest, every animal stared at him in amazement.

"What strange creature is this?" whispered the deer.

Even the tiger stepped aside.

The clever jackal quickly realized the animals were afraid of him.

He stood proudly and declared, "Do not fear! The gods have chosen me to be the king of the forest. My blue color is proof that I have been blessed."

The animals believed him.

The lion, tiger, elephant, and bear all agreed to serve the mysterious blue king.

Every day they brought him delicious food while he relaxed beneath the tallest tree.

The jackal enjoyed his comfortable life and forgot where he had come from.

One moonlit night, he heard a group of wild jackals howling in the distance.

Without thinking, he lifted his head and joined them.

"Awooooo!"

The lion's ears twitched.

"That's no magical king," he growled. "That's an ordinary jackal!"

The animals realized they had been fooled.

Ashamed of his lies, the jackal ran deep into the forest and was never trusted again.`,
		moral:
			'A lie may bring temporary success, but the truth always reveals itself.',
	},
	{
		id: '13',
		title: 'The Dove, the Mouse, the Crow, and the Deer',
		animal: '🦌',
		category: 'panchatantra',
		content: `In a peaceful forest lived four good friends—a dove, a clever mouse, a wise crow, and a gentle deer.

Although they were very different, they always helped one another whenever someone was in trouble.

One morning, the deer did not arrive for their usual meeting.

The crow flew high into the sky to search for him.

Soon he spotted the deer trapped inside a hunter's net.

"Don't panic," said the crow. "I'll bring our friend."

The mouse hurried over and immediately began chewing through the ropes with his tiny sharp teeth.

Within minutes, the deer was free.

Just then, the hunter appeared.

The crow quickly whispered another plan.

The deer lay perfectly still on the ground, pretending to be dead.

The crow landed beside him and gently pecked at the grass as if eating.

The hunter smiled.

"At least I'll take this deer home."

He dropped the empty net and walked toward the deer.

At that exact moment, the mouse quietly chewed through the net.

The deer sprang to his feet and raced into the forest.

The crow flew away.

The mouse disappeared into a nearby hole.

The hunter stood there, confused and empty-handed.

That evening, the four friends laughed together beneath a large banyan tree, grateful that teamwork had once again saved the day.`,
		moral: 'True friends help one another with their unique strengths.',
	},
	{
		id: '14',
		title: 'The Three Fishes',
		animal: '🐟',
		category: 'panchatantra',
		content: `In a quiet pond lived three fishes.

The first fish was called Far-Seeing because she always planned ahead.

The second was called Quick-Thinker because she could solve problems when they appeared.

The third was called Tomorrow because he always believed there would be plenty of time later.

One evening, two fishermen walked past the pond.

"This pond is full of fish," one of them said.

"Let's return tomorrow morning with our nets."

Far-Seeing heard every word.

"We must leave tonight," she warned.

Without wasting another moment, she swam through a small stream into a nearby lake.

Quick-Thinker stayed behind.

"I'll escape if they really come," he said.

Tomorrow laughed.

"You're both worrying too much."

The next morning, the fishermen returned exactly as they had promised.

Their large nets spread across the pond.

Quick-Thinker allowed himself to be caught.

Then he floated upside down without moving.

"He must already be dead," said one fisherman.

They threw him back into the water.

The clever fish quickly swam away to safety.

Tomorrow tried to escape only after the nets surrounded him.

It was too late.

As the fishermen walked away, Quick-Thinker remembered his friend's words.

From that day on, he always listened to wise advice before danger arrived.`,
		moral: 'Preparing early is easier than escaping danger at the last moment.',
	},
];
