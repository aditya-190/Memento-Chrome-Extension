getJoke()

document.getElementById("copyJoke").addEventListener("click", function () {
    const copyText = document.getElementById('joke').innerText;
    navigator.clipboard.writeText(copyText).then(() =>
        showTooltip("Joke copied &#10003;")
    );
})

function getJoke() {
    fetch('https://icanhazdadjoke.com/slack')
        .then(response => response.json())
        .then(jokeJson => {
            document.getElementById('joke').innerHTML = jokeJson.attachments[0].text;
        });
}

function showTooltip(message = "Copy to clipboard") {
    document.getElementById("myTooltip").innerHTML = message;
}