var clicks = 0;
var stars = 0;
var roll = 0;
var max = 0;

function onButtonClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    if (clicks == 100) {
        alert("wow u got to 100!!! meow :3");
    }
    stars = 0;
    roll = Math.random();
    while (roll <= 1) {
        roll = roll * 2
        stars += 1
    }
    if (stars > max) {
        max = stars;
        document.getElementById("max").innerHTML = max;
    }
    document.getElementById("stars").innerHTML = stars;

}

// omg you found a secret!!!