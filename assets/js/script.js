const headerElement = document.getElementById("header");
const rulesElement = document.getElementById("rules");
const resultsElement = document.getElementById("results");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const retryButton = document.getElementById("retry-btn");
const facebookShare = document.getElementById("fb-share-btn");
const questionContainerElement = document.getElementById("question-container");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreCounter = document.getElementById("score-count");
const livesCounter = document.getElementById("lives-counter");
const levelUpElement = document.getElementById("level-up");
const continueButton = document.getElementById("continue-btn");
const livesReset = document.getElementById("lives-reset");

// Question bank (easy) 

const easyquestions = [
  {
    pict: "assets/images/easy-crests/manutd.png",
    answers: [
      { text: "Premier League", correct: true },
      { text: "Championship", correct: false },
      { text: "League One", correct: false },
      { text: "League Two", correct: false },
    ],
  },
  {
    pict: "assets/images/easy-crests/millwall.png",
    answers: [
      { text: "Premier League", correct: false },
      { text: "Championship", correct: true },
      { text: "League One", correct: false },
      { text: "League Two", correct: false },
    ],
  },
  {
    pict: "assets/images/easy-crests/derby.png",
    answers: [
      { text: "Premier League", correct: false },
      { text: "Championship", correct: true },
      { text: "League One", correct: false },
      { text: "League Two", correct: false },
    ],
  },
  {
    pict: "assets/images/easy-crests/villa.png",
    answers: [
      { text: "Premier League", correct: true },
      { text: "Championship", correct: false },
      { text: "League One", correct: false },
      { text: "League Two", correct: false },
    ],
  },
  {
    pict: "assets/images/easy-crests/coventry.png",
    answers: [
      { text: "Premier League", correct: false },
      { text: "Championship", correct: true },
      { text: "League One", correct: false },
      { text: "League Two", correct: false },
    ],
  },
  {
    pict: "assets/images/easy-crests/doncaster.png",
    answers: [
      { text: "Premier League", correct: false },
      { text: "Championship", correct: false },
      { text: "League One", correct: true },
      { text: "League Two", correct: false },
    ],
  },
  {
    pict: "assets/images/easy-crests/qpr.png",
    answers: [
      { text: "Premier League", correct: false },
      { text: "Championship", correct: true },
      { text: "League One", correct: false },
      { text: "League Two", correct: false },
    ],
  },
  {
    pict: "assets/images/easy-crests/salop.png",
    answers: [
      { text: "Premier League", correct: false },
      { text: "Championship", correct: false },
      { text: "League One", correct: true },
      { text: "League Two", correct: false },
    ],
  },
  {
    pict: "assets/images/easy-crests/arsenal.png",
    answers: [
      { text: "Premier League", correct: true },
      { text: "Championship", correct: false },
      { text: "League One", correct: false },
      { text: "League Two", correct: false },
    ],
  },
  {
    pict: "assets/images/easy-crests/sunderland.png",
    answers: [
      { text: "Premier League", correct: false },
      { text: "Championship", correct: false },
      { text: "League One", correct: true },
      { text: "League Two", correct: false },
    ],
  },
  {
    pict: "assets/images/easy-crests/norwich.png",
    answers: [
      { text: "Premier League", correct: false },
      { text: "Championship", correct: true },
      { text: "League One", correct: false },
      { text: "League Two", correct: false },
    ],
  },
  {
    pict: "assets/images/easy-crests/southend.png",
    answers: [
      { text: "Premier League", correct: false },
      { text: "Championship", correct: false },
      { text: "League One", correct: false },
      { text: "League Two", correct: true },
    ],
  },
  {
    pict: "assets/images/easy-crests/walsall.png",
    answers: [
      { text: "Premier League", correct: false },
      { text: "Championship", correct: false },
      { text: "League One", correct: false },
      { text: "League Two", correct: true },
    ],
  },
  {
    pict: "assets/images/easy-crests/wolves.png",
    answers: [
      { text: "Premier League", correct: true },
      { text: "Championship", correct: false },
      { text: "League One", correct: false },
      { text: "League Two", correct: false },
    ],
  },
  {
    pict: "assets/images/easy-crests/fleetwood.png",
    answers: [
      { text: "Premier League", correct: false },
      { text: "Championship", correct: false },
      { text: "League One", correct: true },
      { text: "League Two", correct: false },
    ],
  },
];

// Question bank (hard)

const hardquestions = [
  {
    pict: "assets/images/hard-crests/augsburg.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: true },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/betis.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: true },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/wolfsburg.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: true },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/celtavigo.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: true },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/dortmund.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: true },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/lille.png",
    answers: [
      { text: "France Ligue 1", correct: true },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/madrid.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: true },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/marseille.png",
    answers: [
      { text: "France Ligue 1", correct: true },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/monchengladbach.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: true },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/nice.png",
    answers: [
      { text: "France Ligue 1", correct: true },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/dundee.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: true },
    ],
  },
  {
    pict: "assets/images/hard-crests/frankfurt.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: true },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/hamilton.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: true },
    ],
  },
  {
    pict: "assets/images/hard-crests/hibs.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: true },
    ],
  },
  {
    pict: "assets/images/hard-crests/lyon.png",
    answers: [
      { text: "France Ligue 1", correct: true },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/real.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: true },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/rangers.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: true },
    ],
  },
  {
    pict: "assets/images/hard-crests/villareal.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: true },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/dijon.png",
    answers: [
      { text: "France Ligue 1", correct: true },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/granada.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: true },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/osasuna.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: true },
      { text: "German Bundesliga", correct: false },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/mainz.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: true },
      { text: "Scottish Premiership", correct: false },
    ],
  },
  {
    pict: "assets/images/hard-crests/schalke.png",
    answers: [
      { text: "France Ligue 1", correct: false },
      { text: "Spanish La Liga", correct: false },
      { text: "German Bundesliga", correct: true },
      { text: "Scottish Premiership", correct: false },
    ],
  },
];

let countRightAnswers = 0;
let livesLeft = 3;
let shuffledQuestions, currentQuestionIndex;

//Event Listeners

startButton.addEventListener("click", () => startGame(easyquestions));
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
retryButton.addEventListener("click", () => {
  startGame(easyquestions);
  document.getElementById("background-image").style.backgroundImage =
    "url('assets/images/background-images/emirates.jpg')";
  retryButton.classList.add("hide");
  resetLivesCounter();
  countRightAnswers = 0;
  document.getElementById("current-score").innerHTML = countRightAnswers;
});
continueButton.addEventListener("click", () => {
  levelUpElement.classList.add("hide");
  currentQuestionIndex++;
  startGame(hardquestions);
  resetLivesCounter();
  document.getElementById("background-image").style.backgroundImage =
    "url('assets/images/background-images/oldtrafford.jpg')";
});

//Start of game

function startGame(easyquestions) {
  headerElement.classList.add("hide");
  rulesElement.classList.add("hide");
  startButton.classList.add("hide");
  scoreCounter.classList.remove("hide");
  livesCounter.classList.remove("hide");
  resultsElement.classList.add("hide");
  facebookShare.classList.add("hide");
  shuffledQuestions = easyquestions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  livesLeft = 3;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

//End of game

function endGame() {
  headerElement.classList.remove("hide");
  scoreCounter.classList.add("hide");
  questionContainerElement.classList.add("hide");
  retryButton.classList.remove("hide");
  nextButton.classList.add("hide");
  if (countRightAnswers < 10) {
    document.getElementById("end-message").innerHTML = "Oh Dear...";
    resultsElement.classList.remove("hide");
    document.getElementById("final-score").innerHTML = countRightAnswers;
    document.getElementById("background-image").style.backgroundImage =
      "url('assets/images/background-images/sundayleague.jpg')";
  } else if (countRightAnswers < 20) {
    document.getElementById("end-message").innerHTML = "Not Bad";
    resultsElement.classList.remove("hide");
    document.getElementById("final-score").innerHTML = countRightAnswers;
    document.getElementById("background-image").style.backgroundImage =
      "url('assets/images/background-images/championsleague.jpg')";
  } else if (countRightAnswers < 33) {
    document.getElementById("end-message").innerHTML = "Great Effort";
    resultsElement.classList.remove("hide");
    document.getElementById("final-score").innerHTML = countRightAnswers;
    document.getElementById("background-image").style.backgroundImage =
      "url('assets/images/background-images/wales.jpg')";
  } else {
    document.getElementById("end-message").innerHTML = "Amazing!!!";
    resultsElement.classList.remove("hide");
    document.getElementById("final-score").innerHTML = countRightAnswers;
    document.getElementById("background-image").style.backgroundImage =
      "url('assets/images/background-images/celebration.jpg')";
  }
}

//Reset Lives counter

function resetLivesCounter() {
  document.getElementById("life-1").src =
    "assets/images/misc-images/whiteball.jpg";
  document.getElementById("life-2").src =
    "assets/images/misc-images/whiteball.jpg";
  document.getElementById("life-3").src =
    "assets/images/misc-images/whiteball.jpg";
}

//Level Up message

function levelUp() {
  levelUpElement.classList.remove("hide");
  scoreCounter.classList.add("hide");
  questionContainerElement.classList.add("hide");
  livesCounter.classList.add("hide");
  if (livesLeft == 3) {
    livesReset.classList.add("hide");
  }
}

//Set next question

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

//Display quesion and answers

function showQuestion(question) {
  document.getElementById("crest").src = question.pict;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
    answerButtonsElement.classList.remove("disable");
  });
}

//Prepare for next question

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

//Select an answer

function selectAnswer() {
  const selectedButton = event.target;
  const correct = selectedButton.dataset.correct;
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
    answerButtonsElement.classList.add("disable");
  } else {

//Move to harder questions

    levelUp();
  }
  if ((selectedButton.dataset = correct)) {
    countRightAnswers++;
  } else {
    livesLeft--;
  }
  document.getElementById("current-score").innerHTML = countRightAnswers;

//Lives left 

  if (livesLeft < 1) {
    document.getElementById("life-1").src =
      "assets/images/misc-images/redball.jpg";
    document.getElementById("life-2").src =
      "assets/images/misc-images/redball.jpg";
    document.getElementById("life-3").src =
      "assets/images/misc-images/redball.jpg";
    endGame();
  } else if (livesLeft < 2) {
    document.getElementById("life-1").src =
      "assets/images/misc-images/redball.jpg";
    document.getElementById("life-2").src =
      "assets/images/misc-images/redball.jpg";
    document.getElementById("life-3").src =
      "assets/images/misc-images/whiteball.jpg";
  } else if (livesLeft < 3) {
    document.getElementById("life-1").src =
      "assets/images/misc-images/redball.jpg";
    document.getElementById("life-2").src =
      "assets/images/misc-images/whiteball.jpg";
    document.getElementById("life-3").src =
      "assets/images/misc-images/whiteball.jpg";
  } else {
    document.getElementById("life-1").src =
      "assets/images/misc-images/whiteball.jpg";
    document.getElementById("life-2").src =
      "assets/images/misc-images/whiteball.jpg";
    document.getElementById("life-3").src =
      "assets/images/misc-images/whiteball.jpg";
  }

//Complete game

  if (currentQuestionIndex == 19) {
    endGame();
  }
}

//Answer buttons colour indicators

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("incorrect");
  }
}

//Reset answer colour indicators to neutral

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}
