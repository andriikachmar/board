const board = document.querySelector('#board')
const SQUARES_NUMBER = 504
const colors = ['blue', 'yellow', 'red', 'green', 'purple', 'white']

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () => {
		setColor(square)
	})

	square.addEventListener('mouseleave', () => {
		removeColor(square)
	})

	board.appendChild(square)
}

function setColor(el) {
	const color = getRandomColor()
	el.style.backgroundColor = color
	el.style.boxShadow = `0 0 2px ${color}, 0 0 2px ${color}`
}

function removeColor(el) {
	el.style.backgroundColor = '#1d1d1d'
	el.style.boxShadow = `0 0 2px #1d1d1d`
}

function getRandomColor() {
	const id = Math.floor(Math.random() * colors.length)
	return colors[id]
}