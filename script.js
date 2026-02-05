let yesSize = 1;
let noSize = 1;
let texts = [
    "No",
    "Are you sure?😄",
    "Are you sure you're sure?😅",
    "you better say yes😣",
    "baby pleaseeeee😟",
    "please say yesssss",
    "please",
];
let count = 0;

function noClick() {
    yesSize += 0.2;
    noSize -= 0.1;

    yes.style.transform = `scale(${yesSize})`;
    no.style.transform = `scale(${noSize})`;

    count++;

    if (count < texts.length) {
        no.innerHTML = texts[count];
    }

    if (noSize <= 0.3) {
        no.style.display = "none";
    }
}

function goPage2() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
}