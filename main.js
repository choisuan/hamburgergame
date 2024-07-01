let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 3;
let gameover = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
    userInput.value = "";
  });

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1; // Math.random은 0부터 1사이 숫자를 랜덤으로 추출
  console.log("정답", computerNum);
}

pickRandomNum();

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이의 숫자를 입력해주세요.";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다.";
    return;
  }

  chances = chances - 1;
  console.log("chance", chances);
  chanceArea.textContent = `남은 기회:${chances}번`;

  if (userValue < computerNum) {
    resultArea.textContent = "Up!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down!";
  } else {
    resultArea.textContent = "정답!";
    gameover = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameover = true;
  }

  if (gameover == true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();
  resultArea.textContent = "결과값이 여기 나옵니다";
}
