$(function(){
	$('.btn').click(function(event){
		event.preventDefault();
		var player_1 = $('.player1').val();
		var player_2 = $('.player2').val();
		if(player_1 == ""){
			alert("Enter Player 1 Name");
			window.location = "index.html";
		}
		else if(player_2 == ""){
			alert("Enter Player 2 Name");
			window.location = "index.html";
		}
		$('.form-inline').css('display', 'none');
		$('#selector_form').css('display', 'block');
		$('#player_select_mark').text(player_1+" select your mark!!!");
		$('.X').click(function(){
			var x = $(this).attr('value');
			if(x == "X"){
				var y = "O";
			}
			else if(x == "O"){
				var y = "X";
			}
			$('.container').css('display', 'block');
			$('form').css('display', 'none');
			if(x == "X"){
				$('#player_1').text(player_1+' is '+' : '+ ' '+' '+x);
				$('#player_2').text(player_2+' is '+' : '+ ' '+' '+'O');
			}
			else{
				$('#player_1').text(player_1+' is '+' : '+ ' '+' '+x);
				$('#player_2').text(player_2+' is '+' : '+ ' '+' '+'X');
			}
			$('#turn').text(player_1+' turn');
			$('.col-md-4').click(function(){
				$(this).parent().css('pointer-events', 'none');
				$(this).parent().css('cursor', 'default');
				var initial_check = $(this).children().text();
				var turn = $('#turn').text();
				if(initial_check == ""){
					if($('#turn').text() == player_1+" turn" && x=="X"){
						$(this).children().text("X");
					}
					else if($('#turn').text() == player_1+" turn" && x=="O"){
						$(this).children().text("O");
					}
					else if($('#turn').text() == player_2+" turn" && x=="X"){
						$(this).children().text("O");
					}
					else if($('#turn').text() == player_2+" turn" && x=="O"){
						$(this).children().text("X");
					}
					if(turn ==  player_1+" turn"){
						$('#turn').text(player_2+" turn");
					}
					else if(turn == player_2+" turn"){
						$('#turn').text(player_1+' turn');
					}
				}
				else if(initial_check == "X"){
					$(this).children().text("");
				}
				else if(initial_check == "O"){
					$(this).children().text("");
				}
				var array = [];
				$('.col-md-4').each(function(){
					array.push($(this).children().text());
				});
				console.log(array);
				var length = 0;
				for(var i=0;i<=8;i++){
					if(array[i] != ""){
						length++;
					}
				}
				console.log(length);
				for(var j=0;j<9;j+=3){
					if(array[j]==x && array[j+1]==x && array[j+2]==x){
						alert(player_1+" wins the game");
						window.location = "index.html";
					}
					else if(array[j]==y && array[j+1]==y && array[j+2]==y){
						alert(player_2+" wins the game");
						window.location = "index.html";
					}
				}
				for(var j=0;j<3;j++){
					if(array[j]==x && array[j+3]==x && array[j+6]==x){
						alert(player_1+" wins the game");
						window.location = "index.html";
					}
					else if(array[j]==y && array[j+3]==y && array[j+6]==y){
						alert(player_2+" wins the game");
						window.location = "index.html";
					}
				}
				for(var j=0;j<1;j++){
					if(array[j]==x && array[j+4]==x && array[j+8]==x){
						alert(player_1+" wins the game");
						window.location = "index.html";
					}
					else if(array[j]==y && array[j+4]==y && array[j+8]==y){
						alert(player_2+" wins the game");
						window.location = "index.html";
					}
				}
				for(var j=2;j<3;j++){
					if(array[j]==x && array[j+2]==x && array[j+2]==x){
						alert(player_1+" wins the game");
						window.location = "index.html";
					}
					else if(array[j]==y && array[j+2]==y && array[j+2]==y){
						alert(player_2+" wins the game");
						window.location = "index.html";
					}
				}
				if(length == 9){
					alert("The game is draw between "+player_1+" and "+player_2+". Try again...");
					window.location = "index.html";
				}
			});
		});
	});
	
});