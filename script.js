let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameEnded = false;

function handleCellClick(index) {
    if (!gameEnded && board[index] === '') {
        board[index] = currentPlayer;
        document.querySelector('.cell:nth-child(' + (index + 1) + ')').textContent = currentPlayer;
        
        if (checkWin()) {
            document.getElementById('result').textContent = 'Player ' + currentPlayer + ' wins!';
            gameEnded = true;
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('result').textContent = 'It\'s a draw!';
            gameEnded = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameEnded = false;
    document.getElementById('result').textContent = '';
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}
