var clicks = 0;
var stars = 0;
var roll = 0;

function onButtonClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    if (clicks == 100) {
        alert("wow u got to 100!!! meow :3");
    }
    stars = 0;
    roll = Math.random();
    while (roll <= 1) {
        roll *= 2
        stars += 1
    }
    document.getElementById("stars").innerHTML = stars;

}

// const button = document.querySelector('button');
// button.addEventListener('click', onButtonClick);