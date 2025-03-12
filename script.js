var clicks = 0;

function onButtonClick() {
    // alert("Button clicked!");
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}

// const button = document.querySelector('button');
// button.addEventListener('click', onButtonClick);