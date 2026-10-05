document.getElementById("moodButton").addEventListener("click", function () {

    document.getElementById("page").style.backgroundColor = "#dfe8dc";

    document.getElementById("title").innerHTML = "Feeling Refreshed!";

});


document.getElementById("tipButton").addEventListener("click", function () {

    document.getElementById("message").innerHTML =
        "Stand up, stretch, and drink some water!";

});


document.getElementById("surpriseButton").addEventListener("click", function () {

    window.alert("You have been studying hard. Take a break!");

    document.getElementById("result").innerHTML =
        "You deserve a little rest ☕";

});


document.addEventListener("keydown", function (event) {

    if (event.code === "Space") {

        document.getElementById("result").innerHTML =
            "Rest your eyes for a moment and take a deep breath.";

    }

});