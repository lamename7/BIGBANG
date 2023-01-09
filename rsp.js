var humanScore = 0;
var computerScore = 0;

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;
document.getElementById('lizard').onclick = playLizard;
document.getElementById('spock').onclick = playSpock;



function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}
function playLizard() {
  play("lizard");
}
function playSpock() {
  play("spock");
}

function play(humanPlay) {
  
  computerPlay = getComputerPlay();
  
  document.getElementById('status').innerHTML = "<p>You played <strong>" + humanPlay + "</strong>. Sheldor played <strong>" + computerPlay + "</strong>.</p>";
  
  if(humanPlay == 'rock') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>It's a tie. :|</p>";
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>Dr. Sheldon Cooper for the win. 😏</p>";
      computerScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You win! 🖕</p>";
      humanScore++;
    } else if (computerPlay == 'lizard') {
      document.getElementById('status').innerHTML += "<p>You win! 🖕</p>";
      humanScore++;
    } else if (computerPlay == 'spock') {
      document.getElementById('status').innerHTML += "<p>Dr. Sheldon Cooper for the win. 😏</p>";
      computerScore++;
    }
  } else if (humanPlay == 'paper') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>You win! 🖕</p>";
      humanScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>It's a tie. :|</p>";
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>Dr. Sheldon Cooper for the win. 😏</p>";
      computerScore++;
    } else if (computerPlay == 'lizard') {
      document.getElementById('status').innerHTML += "<p>Dr. Sheldon Cooper for the win. 😏</p>";
      computerScore++;
    } else if (computerPlay == 'spock') {
      document.getElementById('status').innerHTML += "<p>You win. 🖕</p>";
      humanScore++;
    }  
  } else if (humanPlay == 'scissors') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>Dr. Sheldon Cooper for the win. 😏</p>";
      computerScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You win! 🖕</p>";
      humanScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>It's a tie. :|</p>";
    } else if (computerPlay == 'lizard') {
      document.getElementById('status').innerHTML += "<p>You win! 🖕</p>";
      humanScore++;
    } else if (computerPlay == 'spock') {
      document.getElementById('status').innerHTML += "<p>Dr. Sheldon Cooper for the win. 😏</p>";
      computerScore++;
    }  
  } else if (humanPlay == 'lizard') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>Dr. Sheldon Cooper for the win. 😏</p>";
      computerScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You win! 🖕</p>";
      humanScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>Dr. Sheldon Cooper for the win. 😏</p>";
      computerScore++;
    } else if (computerPlay == 'lizard') {
      document.getElementById('status').innerHTML += "<p>It's a tie.</p>";
    } else if (computerPlay == 'spock') {
      document.getElementById('status').innerHTML += "<p>You win! 🖕</p>";
      humanScore++;
    }  
  } else if (humanPlay == 'spock') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>Dr. Sheldon Cooper for the win. 😏</p>";
      humanScore++;
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You win! 🖕</p>";
      humanScore++;
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>Dr. Sheldon Cooper for the win. 😏</p>";
      computerScore++;
    } else if (computerPlay == 'spock') {
      document.getElementById('status').innerHTML += "<p>It's a tie.</p>";
    } else if (computerPlay == 'lizard') {
      document.getElementById('status').innerHTML += "<p>You win! 🖕</p>";
      humanScore++;
    }  
  }
  
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  
}

function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}