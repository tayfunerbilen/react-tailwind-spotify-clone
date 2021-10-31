import Section from "components/Section";

function Home() {

	const items = [
		{
			id: 1,
			title: 'Intouchables - Soundtracks OST',
			description: 'Original Soundtrack',
			image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146',
			type: 'album'
		},
		{
			id: 2,
			title: 'Peaceful Piano',
			description: 'Relax and indulge with beautiful piano pieces',
			image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
			type: 'album'
		},
		{
			id: 3,
			title: 'Hang Massive',
			description: 'Artist',
			image: 'https://i.scdn.co/image/ab67616100005174802686196d39eb0b7b5cd8b1',
			type: 'artist'
		},
		{
			id: 4,
			title: 'Intouchables - Soundtracks OST',
			description: 'Original Soundtrack',
			image: 'https://i.scdn.co/image/d39397d2f6a1525b3fe90369c89ea2d94aac5714',
			type: 'podcast'
		},
		{
			id: 5,
			title: 'Intouchables - Soundtracks OST',
			description: 'Original Soundtrack',
			image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146',
			type: 'album'
		}
	]

	return (
		<div className="grid gap-y-8">
			<Section
				title="Recently played"
				more="/blabla"
				items={items}
			/>
			<Section
				title="Shows to try"
				more="/blabla"
				items={items}
			/>
			<Section
				title="Made For Tayfun Erbilen"
				more="/blabla"
				items={items}
			/>
		</div>
	)
}

export default Home