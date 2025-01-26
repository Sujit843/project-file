const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "Jane Austen"],
        correct: "Harper Lee"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(button, currentQuestion.correct));
        answersContainer.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    answersContainer.innerHTML = '';
}

function selectAnswer(button, correctAnswer) {
    const isCorrect = button.textContent === correctAnswer;
    if (isCorrect) {
        score++;
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }

    Array.from(answersContainer.children).forEach(btn => {
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        }
        btn.disabled = true;
    });

    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById('question-container').hidden = true;
    resultContainer.hidden = false;
    scoreElement.textContent = Your score: ${score} / ${questions.length};
}

showQuestion();