const getWinner = ({board, playedBy, turnCount}) => {
    if(turnCount < 4) return;
    let winner = null;
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    winningCombos.forEach((combo, index) => {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    });
    if(!winner && !board.includes('')) {
        return 'tie';
    }
    return winner;
}

exports.getWinner = getWinner;