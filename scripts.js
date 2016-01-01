
function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'slow', 'swing').animate({
        opacity: 1
    }, 'slow', 'swing');
}

var word;
var cursor;


$(document).ready(function(){
	setInterval ('cursorAnimation()', 600);
	
	$('#input').keyup(function(){
		word = $('#input').val();
		$('#output').text(word + " ");

	});


});