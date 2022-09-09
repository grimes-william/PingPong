let p1Score = 0;
let p2Score = 0;

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const reset = document.getElementById('reset');
const score = document.getElementById('score');
const playingTo = document.getElementById('playingTo');

// Reset the score counter to 0-0 when score limit changes
playingTo.addEventListener('change', function () {
    p1Score = 0;
    p2Score = 0;
    score.innerHTML = `${p1Score} to ${p2Score}`;
});

p1.onclick = function () {
    if (p1Score < playingTo.value) {
        p1Score += 1;
        if (p1Score != playingTo.value) {
            score.innerHTML = `${p1Score} to ${p2Score}`;
        }
        else {
            score.innerHTML = "Player 1 is the winner!";
            // Prevent the user from hitting anything besides reset
            p1.style.display = "none";
            p2.style.display = "none";
            reset.style.width = 100 + "%";
        }
    } else {
        score.innerHTML = "Press Reset to play again!";
    }
}

p2.onclick = function () {
    if (p2Score < playingTo.value) {
        p2Score += 1;
        if (p2Score != playingTo.value) {
            score.innerHTML = `${p1Score} to ${p2Score}`;
        }
        else {
            score.innerHTML = "Player 2 is the winner!";
            // Prevent the user from hitting anything besides reset
            p1.style.display = "none";
            p2.style.display = "none";
            reset.style.width = 100 + "%";
        }
    } else {
        score.innerHTML = "Press Reset to play again!";
    }
}

// Reset the counter and UI back to normal
reset.onclick = function () {
    p1Score = 0;
    p2Score = 0;
    score.innerHTML = `${p1Score} to ${p2Score}`;
    p1.style.display = "flex";
    p2.style.display = "flex";
    reset.style.width = 33.33333333 + "%";
}