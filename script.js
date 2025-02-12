const questions = [
    {
        question: "What year was javaScript launched?",
        options: ["1996", "1995", "1994", "None of the Above"],
        answer: "1995",
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C++", "Python", "JavaScript"],
        answer: "JavaScript",
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Cascading Simple Sheets",
            "Cars SUVs Sailboats",
        ],
        answer: "Cascading Style Sheets",
    },
    {
        question: "Which keyword is used for declaring a variable in javaScript that can be reassigned?",
        options: ["const", "var", "let", "static"],
        answer: "let",
    },
    {
        question: "Which symbol is used for comments in javaScript?",
        options: ["//", "/* */", "#", "--"],
        answer: "//",
    },
    {
        question: "How do you define a funtion in javaScript?",
        options: ["function = myFunc() {}", "funtion.myFunc() {}", "function myFunc() {}", "myFunc() = function {}"],
        answer: "function myFunc() {}",
    },
    {
        question: "Which of the following is a javaScript framework?",
        options: ["Django", "Flask", "React", "Laravel"],
        answer: "React",
    },
    {
        question: "Which method is used to add an element to the end of an array in javaScript?",
        options: ["push()", "unshift()", "pop()", "shift()"],
        answer: "push()",
    },
    {
        question: "What will be the output of console.log(typeof{})?",
        options: ["object", "array", "null", "undefined"],
        answer: "object",
    },
    {
        question: "Which HTML element is used to put the javaScript code?",
        options: ["<javascript>", "<js>", "<scripting", "<script>"],
        answer: "<script>",
    },
];




let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;


const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerE1 = document.getElementById("timer"); 
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    clearInterval(timerInterval);
    timeLeft = 10;
    timerE1.textContent = timeLeft;

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.onclick = () => selectAnswer(button, option);
        optionsEl.appendChild(button);
    });

    startTimer();

}

function startTimer() {
    timerInterval = setInterval(() =>{
        timeLeft--;
        timerE1.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's up! The correct answer was: " + question[currentQuestionIndex].answer);
            nextQuestion();
        }
    }, 1000);
}

function selectAnswer(button, selectedOption) {
    document.querySelectorAll(".option").forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");

    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }
    clearInterval(timerInterval);
}





nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question-container").classList.add("hidden");
        nextBtn.classList.add("hidden");
        scoreContainer.classList.remove("hidden");
        scoreEl.textContent = `${score} / ${questions.length}`;
    }
});


loadQuestion();
