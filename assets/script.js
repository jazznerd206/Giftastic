//array of emotions/reactions to generate buttons
var topics = ['happy', 'sad', 'angry', 'jealousy', 'joy', 'disgust', 'surprise', 'anticipation', 'trust', 'gotcha', 'excitement', 'romance', 'nostalgia', 'horror', 'craving', 'satisfaction', 'boring', 'winning', 'losing'];

//============================================================================================

//document ready function
$(document).ready(function() {
    //console.log('document ready');
    buttonGenerate(topics);
    addButton();
    topicButtonClick();
    changeState();
})

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
        //console.log('buttons created');
    }
}

//function to add buttons
function addButton() {
        $('#searchButton').on('click', function(event) {
            //console.log('ive been clicked');
            event.preventDefault();
            var newTerm = $('#searchField').val().trim();
            //console.log(newTerm);
            topics.push(newTerm);
            //console.log(topics);
            buttonGenerate(topics);
        });
}

//topic button click handler
function topicButtonClick() {
    $(document).on("click", '#reactButton', function(event) {
        event.preventDefault();
        var searchTerm = $(this).attr('data-name');
        //console.log('ive been clicked');
        //console.log(searchTerm);
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=CGubh0n51S9H6ZsoKjiYx8U4PO3IO17X&limit=10';
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            //console.log(response);
            var gifIncoming = response.data;
            for (let i = 0; i < gifIncoming.length; i++) {
            var gifImp = $('<div>');
            var gifPlace = $('<img>');
            var rating = $("<h3 class='rating'>").text("Rating: " + gifIncoming[i].rating);
            gifPlace.attr('src', gifIncoming[i].images.fixed_height_still.url);
            gifPlace.attr('data-still', gifIncoming[i].images.fixed_height_still.url);
            gifPlace.attr('data-animate', gifIncoming[i].images.fixed_height.url);
            gifPlace.attr('data-state', 'still');
            gifPlace.addClass('stateChange');
            gifImp.addClass('gif');
            rating.attr('src', gifIncoming[i].images.rating);
            //console.log("rating is " + rating)
            gifImp.prepend(rating);
            gifImp.append(gifPlace);
            $('#gifReceiver').prepend(gifImp);
            }
        });
    });
}

//function to change state of gif
function changeState() {
    $(document).on('click', '.stateChange', function(){
        var state = $(this).attr('data-state');
        console.log(this, "been clicked");
            if (state == 'still') {
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            } else {
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            };
    });
}
