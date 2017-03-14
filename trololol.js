
	function TestFunction() {
		 var urDumb;
		var soVar = "";
	 while (urDumb != "I'm dumb") {
			urDumb = prompt("You're " + soVar + "dumb.");
		 if (urDumb.toUpperCase() === "I'M STEVEN") {
			 prompt("I'm sorry");
			 break;
		 }
		soVar = soVar.concat("so ");
	}
} 