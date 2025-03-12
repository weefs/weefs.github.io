var clicks = 0;

function onButtonClick() {
    // alert("Button clicked!");
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    if (clicks == 100) {
        alert("wow u got to 100!!! meow :3");
    }
}

// const button = document.querySelector('button');
// button.addEventListener('click', onButtonClick);