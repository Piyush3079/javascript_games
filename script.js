$(function(){
	$('#turn').text('Player 1 turn');
	$('.col-md-4').click(function(){
		var initial_check = $(this).children().text();
		var turn = $('#turn').text();
		if(initial_check == ""){
			$(this).children().text("X");
		}
		else if(initial_check == "X"){
			$(this).children().text("");
		}
		if(turn == "Player 1 turn"){
			$('#turn').text("Player 2 turn");
		}
		else if(turn == "Player 2 turn"){
			$('#turn').text('Player 1 turn');
		}
	});
});