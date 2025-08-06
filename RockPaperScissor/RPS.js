let userScore = 0;
let computerScore = 0;

function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;

    let result = getWinner(userChoice, computerChoice);

    document.getElementById('winner').textContent = `Result: ${result}`;

    if (result === 'You Win!') {
        userScore++;
    } else if (result === 'Computer Wins!') {
        computerScore++;
    }

    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function getWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a Tie!';
    }

    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'paper' && computer === 'rock')
    ) {
        return 'You Win!';
    } else {
        return 'Computer Wins!';
    }
}
