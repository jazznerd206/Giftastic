//array of emotions/reactions to generate buttons
let topics = ['happy', 'sad', 'angry', 'jealousy', 'joy', 'disgust', 'surprise', 'anticipation', 'trust', 'gotcha', 'excitement', 'romance', 'nostalgia', 'horror', 'craving', 'satisfaction', 'boring', 'winning', 'losing'];

//function to generate buttons
function buttonGenerate(topics) {
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.attr('id', 'reactButton');
        button.text(topics[i]);
        $('#buttonReceiver').append(button);
        console.log('buttons created');
    }}


$(document).ready(function() {
    console.log('document ready');
    buttonGenerate(topics);
});