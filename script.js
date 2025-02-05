document.addEventListener("DOMContentLoaded", function () {
    var noButton = document.getElementById('no-button');
    var yesButton = document.getElementById('yes-button');
    var question = document.getElementById('question');
    var questionContainer = document.getElementById('question-container');

    noButton.addEventListener("mouseover", function () {
        var x = (Math.random() * 200) - 100;
        var y = (Math.random() * 200) - 100; 

        noButton.style.transform = `translate(${x}px, ${y}px)`;
    });

    yesButton.addEventListener("click", function () {
        selectOption('yes'); 
    });

    noButton.addEventListener("click", function () {
        noButton.style.opacity = 0;
    });

    function selectOption(option) {
        if (option === 'yes') { 
            displayCatHeart(); 
        }
    }
});

function displayCatHeart() {
    document.getElementById('question').innerHTML = "YAAYAYAYAYAAYY";
    document.getElementById('text').innerHTML = "send this to jason to confirm!"
    var imageContainer = document.getElementById('image-container');

    var catDanceImage = new Image();
    catDanceImage.src = 'dancingcat.gif';
    catDanceImage.alt = 'Cat Heart';
    catDanceImage.onload = function() {
        imageContainer.appendChild(catDanceImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}
