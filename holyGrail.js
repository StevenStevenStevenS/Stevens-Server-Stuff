window.onload =	function game() {
// 	var firstResponse = prompt("What is your name?");
// 	var secondResponse = prompt("What is your quest?");
// 	var thirdResponse = prompt("What is your favorite color?");
	
	var questions = ["What is your name?", "What is your quest?", "What is your favorite color?"];
	var questionTracker = 0;
	var response = [];
	var enterKey = 13;
	
	$('#questions').text(questions[questionTracker]);
	
	$('body').on('keydown', function(x) {
		var keyPress = x.keyCode;
		
		if(keyPress === enterKey) {
			response.push($('input').val());
			$('input').val('');
			
			questionTracker++;
			$('#questions').text(questions[questionTracker]);
			
			if (response.length === 3) {
				if(response[0].toUpperCase() === "SIR STEVEN" && response[1].toUpperCase() === "TO FIND THE HOLY GRAIL" && response[2].toUpperCase() === "BLUE") {
					prompt('HEY YOU WON! You can cross the bridge');
					$('#gamePicture').css('background-image', 'url(holyGrail.jpg)');
					$('#questions').text('Congratulations!');
					$('input').hide();
				}
				else {
					prompt('YOU LOSE! What is your bank account information?');
					TestFunction();
				}
			}
		}
	})
	
// 	if(prompt("What is your name?").toUpperCase() === "SIR STEVEN") {
// 		if(prompt("What is your quest").toUpperCase() === "TO FIND THE HOLY GRAIL") {
// 			if(prompt("What is your favorite color?").toUpperCase() === "BLUE") {
// 				prompt('HEY YOU WON! You can cross the bridge');
// 				document.getElementById('gamePicture').style.backgroundImage = "url(holyGrail.jpg)";
// // 				document.getElementById('gamePicture').style.display = "block";
				
// 			} else {prompt('YOU HAVE BEEN BLOWN OFF THE BRIDGE... YOU LOSE');}
// 		} else {prompt('YOU HAVE BEEN BLOWN OFF THE BRIDGE... YOU LOSE');}
// 	} else {prompt('YOU HAVE BEEN BLOWN OFF THE BRIDGE... YOU LOSE');}
// 	if (firstResponse === "Sir Steven" && secondResponse === "To find the holy grail" && thirdResponse === "Blue") {
// 		prompt('HEY YOU WON! You can cross the bridge');
// 	}
// 	else {
// 		prompt('YOU HAVE BEEN BLOWN OFF THE BRIDGE... YOU LOSE');
// 	}
	


// 	var urDumb;
// 	var soVar = "";
// 	while (urDumb != "I'm dumb") {
// 			urDumb = prompt("You're " + soVar + "dumb.");
// 		 if (urDumb === "I'm Steven") {
// 			 prompt("I'm sorry");
// 			 break;
// 		 };
// 		soVar = soVar.concat("so ");
// 	}
} 