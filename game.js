
var wordsList = ['drinks', 'pizza', 'bread', 'fries', 'cookies', 'cake', 'candy','taco' ];
var takenWord = ""; //Solution will be held here.
var lettersIntakenWord = []; 
var blanks = 0; 
var blanksAndSuccesses = []; 
var wrong = []; 


var winCounter = 0;
var lossCounter = 0;
var numGuesses = 7;


//Function 


function startGame() {
	
	numGuesses = 7;

	takenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 
	lettersIntakenWord = takenWord.split(""); // The word is broken into individual letters.
	blanks = lettersIntakenWord.length; //we count the number of letters in the word.

	console.log(takenWord); // (for testing)

	blanksAndSuccesses = []; // to resest.
	wrong = []; // reset wrong words.

	for (var i=0; i<blanks; i++){
		blanksAndSuccesses.push("_");
	}

	console.log(blanksAndSuccesses); //inital blanks.

	
	document.getElementById("guessesLeft").innerHTML = numGuesses;
	
	document.getElementById("wordblanks").innerHTML= blanksAndSuccesses.join(" ");

	
	document.getElementById('wrong').innerHTML = wrong.join(" ");

}
// comparison
function checkLetters (letter) {

	var letterInWord = false; //raise a flag

	//iterate through the array.
	for (var i=0; i<blanks; i++){
		if(takenWord[i] == letter) {
			letterInWord = true; 

		}
	}

	
	if(letterInWord){
		for (var i=0; i<blanks; i++){

			
			if(takenWord[i] == letter) {
				blanksAndSuccesses[i] = letter; 
			}
		}
		console.log(blanksAndSuccesses); //if find in the array word then print that.
	}

	else{
		wrong.push(letter); 
		numGuesses--; // minus number of gusssess.
	}

} 
function roundComplete(){

	
	console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

	//update the HTML
	document.getElementById("guessesLeft").innerHTML= numGuesses;
	document.getElementById("wordblanks").innerHTML = blanksAndSuccesses.join(" "); 
	document.getElementById("wrong").innerHTML = wrong.join(" "); 

		if (lettersIntakenWord.toString() == blanksAndSuccesses.toString()) {
			winCounter++; 
			
			alert(); // alert the user that user won.
			document.getElementById("winCounter").innerHTML= winCounter;
			startGame(); //to restart
		}
		
		else if(numGuesses ==0){
			lossCounter++; 
			alert("You Lose"); //user lost
			document.getElementById("lossCounter").innerHTML = lossCounter;
			startGame(); 
		}

}
startGame();

	
	document.onkeyup = function(event) {
		letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();//converting to lowercase.
		checkLetters(letterGuessed); 
		roundComplete(); 
	}




