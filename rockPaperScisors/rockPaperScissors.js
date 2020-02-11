// Possible outcomes
const win = 'You win!';
const lose = 'You lose!';
const tie = "It's a tie!";
const playButton = document.getElementById('playBtn');

// Getting user input
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors'
  ) {
    return userInput;
  } else {
    console.log('Invlid input.');
  }
};

// Getting computer input
const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log('error');
      break;
  }
};

// Computing winner
const determineWinner = (userChoice, computerChoice) => {
  console.log(`Your choice is: ${userChoice}
  Computer's choice is: ${computerChoice}
  ==============================

  ...And the result is:
  `);

  if (userChoice === computerChoice) {
    return tie;
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return lose;
    } else if (computerChoice === 'scissors') {
      return win;
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return lose;
    } else if (computerChoice === 'paper') {
      return win;
    }
  } else {
    if (computerChoice === 'scissors') {
      return lose;
    } else if (computerChoice === 'rock') {
      return win;
    }
  }
};

const play = () => {
  let userChoice = prompt('Rock, paper, or scissors?');
  determineWinner(getUserChoice(userChoice), getcomputerChoice());
};

playButton.addEventListener('click', play);

// Uncomment to test code
// console.log(determineWinner(getUserChoice(), getComputerChoice()));

// let playAgain = prompt('Again?').toLowerCase();
// if (playAgain === 'yes') {
//   console.log(determineWinner(getUserChoice(), getComputerChoice()));
// } else {
//   console.log('Thanks for playing!');
// }
