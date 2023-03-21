const squares = document.querySelectorAll('.square');
let currentPlayer = 'Y';


squares.forEach((square) => {
	square.addEventListener('click', handleClick);
});

function handleClick(event) {
	const square = event.target;
	if (square.textContent !== '') {
		return;
	}
	square.textContent = currentPlayer;
	checkForWinner();
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkForWinner() {
	const rows = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < rows.length; i++) {
		const [a, b, c] = rows[i];
		if (
			squares[a].textContent !== '' &&
			squares[a].textContent === squares[b].textContent &&
			squares[a].textContent === squares[c].textContent
		) {
			alert(`${currentPlayer} wins!`);
			resetBoard();
			return;
		}
	}
	if (Array.from(squares).every((square) => square.textContent !== '')) {
		alert("It's a tie!");
		resetBoard();
		return;
	}
}

function resetBoard() {
	squares.forEach((square) => {
		square.textContent = '';
	});
	currentPlayer = 'X';
}
