const words = [
    {word: "javascript", hint: "A popular programming language"},
    {word: "planet", hint: "Earth is one"},
    {word: "tiger", hint: "A wild animal"},
    {word: "mobile", hint: "Device in your hand"},
    {word: "school", hint: "Place to study"}
];

let selected = words[Math.floor(Math.random() * words.length)];
let hiddenWord = selected.word.split("");
let displayWord = Array(hiddenWord.length).fill("_");

let wrongLetters = [];

document.getElementById("hint").textContent = selected.hint;
document.getElementById("wordDisplay").textContent = displayWord.join(" ");

function guessLetter() {
    let input = document.getElementById("letterInput").value.toLowerCase();
    document.getElementById("letterInput").value = "";

    if (!input.match(/[a-z]/) || input.length !== 1) {
        alert("Please enter a valid letter!");
        return;
    }

    if (displayWord.includes(input) || wrongLetters.includes(input)) {
        alert("Letter already guessed!");
        return;
    }

    if (hiddenWord.includes(input)) {
        hiddenWord.forEach((letter, index) => {
            if (letter === input) {
                displayWord[index] = input;
}
        });
    } else {
        wrongLetters.push(input);
    }

    document.getElementById("wordDisplay").textContent = displayWord.join(" ");
    document.getElementById("wrongLetters").textContent = wrongLetters.join(", ");

    if (!displayWord.includes("_")) {
        document.getElementById("message").textContent = "🎉 You guessed the word!";
    }
}