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
const resultElement = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const finalScoreElement = document.getElementById("final-score");

let currentNumber = 0;
let score = 0;
let answered = false;

function showQuestion() {
  optionsContainer.replaceChildren();

  resultElement.textContent = "";
  resultElement.classList.remove("correct", "wrong");

  answered = false;

  questionElement.textContent = questions[currentNumber].question;

  questions[currentNumber].options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => {
      if (answered) {
        return;
      }

      if (option === questions[currentNumber].answer) {
        resultElement.textContent = "Right!";
        resultElement.classList.add("correct");
        score++;
      } else {
        resultElement.textContent = `Wrong! The answer is ${questions[currentNumber].answer}`;
        resultElement.classList.add("wrong");
      }
      answered = true;
    });
    optionsContainer.appendChild(button);
  });
}
showQuestion();

nextBtn.addEventListener("click", () => {
  if (!answered) {
    return;
  }
  currentNumber++;

  if (currentNumber >= questions.length) {
    resultElement.hidden = true;
    finalScoreElement.hidden = false;
    finalScoreElement.textContent = `You got ${score} out of ${questions.length}`;
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
  finalScoreElement.hidden = true;
  resultElement.hidden = false;
  currentNumber = 0;
  score = 0;
  showQuestion();
});
