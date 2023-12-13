const questions = [
    {
      question: "What is the largest planet in our solar system?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Mars", correct: false },
        { text: "Venus", correct: false }
      ]
    },
    {
      question: "How many moons does Earth have?",
      answers: [
        { text: "One", correct: false },
        { text: "Two", correct: false },
        { text: "Three", correct: false },
        { text: "Four", correct: true }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false }
      ]
    },
    {
      question: "What is the closest galaxy to the Milky Way?",
      answers: [
        { text: "Andromeda", correct: true },
        { text: "Triangulum", correct: false },
        { text: "Messier 87", correct: false },
        { text: "Whirlpool", correct: false }
      ]
    },
    {
      question: "Which spacecraft was the first to reach the Moon?",
      answers: [
        { text: "Apollo 11", correct: true },
        { text: "Sputnik 1", correct: false },
        { text: "Voyager 1", correct: false },
        { text: "Hubble Space Telescope", correct: false }
      ]
    }
  ];

  let currentQuestionIndex = 0;
  let correctAnswers=0;
  const questionText = document.getElementById('question-text');
  const answerButtonsContainer = document.getElementById('answer-buttons');
  const resultContainer = document.getElementById('result-container');

  function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
  }

  function showQuestion(question) {
    questionText.innerText = question.question;
    answerButtonsContainer.innerHTML = '';

    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(answer));
      answerButtonsContainer.appendChild(button);
  });
}

function selectAnswer(answer) {
  if (answer.correct) {
    correctAnswers++;
  }

  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionText.innerText = "Quiz completed!";
  answerButtonsContainer.innerHTML = '';

  // Display the result
  resultContainer.innerText = `You answered ${correctAnswers} out of ${questions.length} questions correctly.`;
}

startQuiz();
