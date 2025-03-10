// Quiz data: Questions, options, and answers
const quizData = [
    {
        question: "What is Vietnam’s most famous noodle soup dish?",
        options: ["Phở", "Ramen", "Udon", "Spaghetti"],
        answer: "Phở"
    },
    {
        question: "What festival marks the Vietnamese Lunar New Year?",
        options: ["Diwali", "Tết", "Songkran", "Hanami"],
        answer: "Tết"
    },
    {
        question: "Which flower is a symbol of Tết celebrations?",
        options: ["Rose", "Cherry Blossom", "Peach Blossom", "Lily"],
        answer: "Peach Blossom"
    }
];

let currentQuestion = 0;
let selectedOption = null;

// Load the current question and options into the DOM
function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""; // Clear previous options

    q.options.forEach((option) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option-btn");
        btn.onclick = () => selectOption(option);
        optionsDiv.appendChild(btn);
    });

    document.getElementById("result").textContent = "";
    selectedOption = null; // Reset selection
}

// Handle option selection
function selectOption(option) {
    selectedOption = option;
    const q = quizData[currentQuestion];
    const result = document.getElementById("result");

    if (selectedOption === q.answer) {
        result.textContent = "Correct! 🎉 Chúc mừng bạn!";
        result.style.color = "#27ae60";
    } else {
        result.textContent = `Oops! The answer is ${q.answer}. Try again!`;
        result.style.color = "#c0392b";
    }
}

// Move to the next question
function checkAnswer() {
    if (selectedOption === null) {
        alert("Please select an option first!");
        return;
    }
    currentQuestion = (currentQuestion + 1) % quizData.length; // Loop through questions
    loadQuestion();
}

// Initialize the quiz when the page loads
document.addEventListener("DOMContentLoaded", loadQuestion);

// Attach the checkAnswer function to the submit button
document.getElementById("submit-btn").addEventListener("click", checkAnswer);