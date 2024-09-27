const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
const MAX_HIGH_SCORES = 5;


finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save button");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highscores.push(score);

    // implicit return, value is either >0 or <0. if b is higher, return b essentially
    // ex: a:100 b:50, b-a:-50, return >0, return a
    highscores.sort((a, b) => b.score - a.score);
    highscores.splice(MAX_HIGH_SCORES);

    localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.assign("/");
    console.log(highscores);
}