$(document).ready(function() {

var correctAnswers = 0
var incorrectAnswers = 0
var unanswered = 0
var counterNum = 100
var questionArr = ["How big is the world's population?", //1
					"What is the number for 911?",//2
 					"Which country has an orange turd as their President?", //3
 					"Where was the hottest temperature recorded on Earth?", //4
  					"What is a zebra's natural skin color?", //5
  					"A monkey, squirrel, and bird are racing to the top of a coconut tree to get the banana, who will get there first?", //6 
  					"If you throw a red stone into a blue sea what will it become?"] //7
var choicesArr = ["7.1,7.2,7.3,7.4", //1
					"911.,911?,911,unsure", //2
					"USA, France, UK, Neither", //3
					"The Flaming Mountains, Death Valley, El Azizia, Australia's Badlands", //4
					"White, Black, Gray, Twilight", //5
					"The squirrel, the monkey, the bird, neither", //6
					"A red stone, a blue stone, a wet stone, a dry stone"] //7
var answersArr = ["7.4",//1
				"911",//2
				"Neither",//3
				"El Azizia",//4
				"White",//5
				"neither",//6
				"a wet stone"]//7
var intervalId;
var triviaGame;
var number;
var selectedAnswer;
var printThis = "";
// <========================================================================	
	$("answersArr").on("click", function(event) {
		selectedAnswer = $(this).text();
	});

	for(var i = 0; i < questionArr.length; i++) {
		printThis += "<br>" + questionArr
	}
	return printThis;

	function timer() {
		intervalId = setInterval(decrement, 4000);
		function decrement() {
			number--
		$("#show-number").html("<h3>" + number + intervalId + "</h3");
			stop();
			reset(decrement, 1000);
		}
	}

	function LossFromTimeout() {
		if (number === 0);
			alert("Time is up!");
			unanswered++
		triviaGame = ".panelbody"
		$(".panelbody").html(triviaGame);
	}

	function amountofWins() {
		if(answersArr[i] === choicesArr[i])
			correctAnswers++
		if (number === 0);
			alert("Time is up!");
		triviaGame = ".panelbody"
		$(".panelbody").html(triviaGame);
	}

	function amountofIncorrect() {
		if(answersArr[i] != choicesArr[i])
			incorrectAnswers++
		if (number === 0);
			alert("Time is up!");
		triviaGame = ".panelbody"
		$(".panelbody").html(triviaGame);
	}

	function generateHTML() {
		$("questionArr" + "choicesArr").html();
	}































});