//array of emotions/reactions to generate buttons
var topics = ['happy', 'sad', 'angry', 'jealousy', 'joy', 'disgust', 'surprise', 'anticipation', 'trust', 'gotcha', 'excitement', 'romance', 'nostalgia', 'horror', 'craving', 'satisfaction', 'boring', 'winning', 'losing'];

//============================================================================================


//document ready function
$(document).ready(function() {
    console.log('document ready');
    buttonGenerate(topics);
    addButton();
    displayGif();
});



//============================================================================================

//function to generate buttons
function buttonGenerate(topics) {
    $('#buttonReceiver').empty();
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.attr('id', 'reactButton');
        button.attr('data-name', topics[i]);
        button.text(topics[i]);
        $('#buttonReceiver').append(button);
        console.log('buttons created');
    }
}

//function to add buttons
function addButton() {
        $('#searchButton').on('click', function(event) {
            console.log('ive been clicked');
            event.preventDefault();
            var newTerm = $('#searchField').val().trim();
            console.log(newTerm);
            topics.push(newTerm);
            console.log(topics);
            buttonGenerate(topics);
        });
}

//topic button click handler
function displayGif() {
    $('#reactButton').on("click", function(event) {
        console.log('ive been clicked');
        var searchTerm = $(this).attr('data-name');
        console.log(searchTerm);
        var queryURL =  'https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=CGubh0n51S9H6ZsoKjiYx8U4PO3IO17X&limit=10';

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        });
    });
}