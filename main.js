const data = [
	{
		name: 'Sun',
		url: './src/imgs/sun.jpg',
		txt: 'The sun is the only star in the solar system.',
	},
	{
		name: 'Mercury',
		url: './src/imgs/mercury.jpg',
		txt: 'The smallest and innermost planet in the Solar System.',
	},
	{
		name: 'Venus',
		url: './src/imgs/venus.jpg',
		txt: 'The second planet from the Sun.',
	},
	{
		name: 'Earth',
		url: './src/imgs/earth.jpg',
		txt: 'The third planet from the Sun and the only astronomical object known to harbor life.',
	},
	{
		name: 'Mars',
		url: './src/imgs/mars.jpg',
		txt: 'The fourth planet from the Sun and the second-smallest planet in the Solar System.',
	},
	{
		name: 'Jupiter',
		url: './src/imgs/jupiter.jpg',
		txt: 'The fifth planet from the Sun and the largest in the Solar System.',
	},
	{
		name: 'Saturn',
		url: './src/imgs/saturn.jpg',
		txt: 'The sixth planet from the Sun and the second-largest in the Solar System.',
	},
	{
		name: 'Uranus',
		url: './src/imgs/uranus.jpg',
		txt: 'The seventh planet from the Sun.',
	},
	{
		name: 'Neptune',
		url: './src/imgs/neptune.jpg',
		txt: 'The eighth and farthest-known planet from the Sun in the Solar System.',
	},
];
const sortOrder = [
	'Sun',
	'Mercury',
	'Venus',
	'Earth',
	'Mars',
	'Jupiter',
	'Saturn',
	'Uranus',
	'Neptune',
];

const wrapper = document.querySelector('.wrapper');
const main = wrapper.querySelector('.main');
const other = wrapper.querySelector('.other');
(function createCards() {
	for (let card of data) {
		const div = document.createElement('div');
		div.classList.add('card');

		const img = document.createElement('img');
		img.classList.add('card__img');
		img.src = card.url;
		img.alt = 'Product img';

		div.appendChild(img);

		const info = document.createElement('div');
		info.classList.add('card__info');

		const name = document.createElement('h2');
		name.classList.add('card__name');
		name.textContent = card.name;

		const text = document.createElement('p');
		text.classList.add('card__txt');
		text.textContent = card.txt;

		info.appendChild(name);
		info.appendChild(text);

		div.appendChild(info);

		if (card.name === 'Sun') {
			div.classList.add('card--big');
			main.appendChild(div);
		} else {
			other.appendChild(div);
		}
	}
})();

other.addEventListener('click', e => {
	if (e.target.closest('.card')) {
		document.querySelectorAll('.card').forEach(card => {
			card.classList.remove('card--big');
		});

		const selectedCard = e.target.closest('.card');
		selectedCard.classList.add('card--big');
		redrawCards(selectedCard);
	}
});

function redrawCards(selectedCard) {
	const otherCards = [
		...other.querySelectorAll('.card'),
		main.querySelector('.card'),
	].sort((a, b) => {
		const aName = a.querySelector('h2').textContent;
		const bName = b.querySelector('h2').textContent;

		return sortOrder.indexOf(aName) - sortOrder.indexOf(bName);
	});

	main.innerHTML = '';
	other.innerHTML = '';

	main.appendChild(selectedCard);
	otherCards.forEach(card => {
		if (card !== selectedCard) {
			other.appendChild(card);
		}
	});
}
