const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Rome", "Madrid"],
    answer: "Paris",
  },

  {
    question: "What country won the 2022 FIFA World Cup?",
    options: ["England", "Portugal", "Argentina", "Spain"],
    answer: "Argentina",
  },

  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
  },

  {
    question:
      "Which gas do plants absorb from the atmosphere during photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: "Carbon dioxide",
  },

  {
    question:
      "Which artist painted 'The Starry Night' while staying at an asylum in France?",
    options: [
      "Claude Monet",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Salvador Dalí",
    ],
    answer: "Vincent van Gogh",
  },
];

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const displayResult = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

let currentNumber = 0;
let score = 0;

function showQuestion() {
  optionsContainer.replaceChildren();
  displayResult.textContent = "";

  questionElement.textContent = questions[currentNumber].question;

  questions[currentNumber].options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => {
      if (option === questions[currentNumber].answer) {
        displayResult.textContent = "Right!";
        score++;
      } else {
        displayResult.textContent = "Wrong!";
      }
    });
    optionsContainer.appendChild(button);
  });
}
showQuestion();

nextBtn.addEventListener("click", () => {
  currentNumber++;

  if (currentNumber >= questions.length) {
    displayResult.textContent = `You got ${score} out of ${questions.length}`;
    optionsContainer.replaceChildren();
    questionElement.textContent = "Quiz complete";
    nextBtn.hidden = true;
    restartBtn.hidden = false;
  } else {
    showQuestion();
  }
});

restartBtn.addEventListener("click", () => {
  nextBtn.hidden = false;
  restartBtn.hidden = true;
  currentNumber = 0;
  score = 0;
  showQuestion();
});
