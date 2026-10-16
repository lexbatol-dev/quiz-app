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

questionElement.textContent = questions[0].question;

questions[0].options.forEach((option) => {
  const button = document.createElement("button");
  button.textContent = option;
  button.addEventListener("click", () => {
    if (option === questions[0].answer) {
      console.log("Right!");
    } else {
      console.log("Wrong!");
    }
  });
  optionsContainer.appendChild(button);
});
