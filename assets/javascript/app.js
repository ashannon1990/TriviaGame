var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var timeRemaining = 11;
var timerOn = false;
var gifArray = []

var questionBank = 
[
    {
        question: "On what street is the pit located?",
        choices: ["Main Street", "Park Ave", "Sullivan Street", "Dogwood Blvd"],
        correct: "Sullivan Street",
    },
    {
        question: "What item does Andy's neighbor steal from him while he's bathing in the backyard?",
        choices: ["Stereo", "Guitar", "Lawn mower", "Chair"],
        correct: "Stereo",
    },
    {
        question: "What does government employee Ron Swanson hate more than anything?",
        choices: ["Music", "Government", "Nature", "Big business"],
        correct: "Government",
    },
    {
        question: "What is Ron Swansons hidden talent that he keeps from all his co workers and friends?",
        choices: ["Home brewing beer", "Painting", "Playing the saxophone", "Wood working"],
        correct: "Playing the saxophone",
    },
    {
        question: "What does Greg Pikitis leave behind after vandalizing the parks department?",
        choices: ["A joker card", "A peach pit", "Coffee grounds", "A banana peel"],
        correct: "A peach pit",
    },
    {
        question: "What illness does Andy say Leslie could be suffering from as Ben is taking her to the hospital?",
        choices: ["Dementia", "Influenza", "Chicken Pox", "Network Connectivity Problems"],
        correct: "Network Connectivity Problems",
    },
    {
        question: "After losing Li'l Sebastion at the Harvest Festival, where does the team find him?",
        choices: ["Carousel", "Corn Maze", "Parking Lot", "Petting zoo"],
        correct: "Corn Maze",
    },
    {
        question: "What is the title of the song Andy writes for Li'l Sebastion?",
        choices: ["5,000 Candles in the Wind", "Indiana's greatest treasure", "Bye Bye Li'l Sebastion", "The little horsey"],
        correct: "5,000 Candles in the Wind",
    },
    {
        question: "Ron Swanson only endorses items he uses exclusively and believes in it. What is one of those items?",
        choices: ["The Lodge Cast Iron Skillets", "Sweet Baby Rays BBQ Sauce", "Ford Vehicles", "Morton Salt"],
        correct: "Morton Salt",
    },
]
var i = 0
var intervalId;


function nextQuestion() {
    questionBank[i++];
    $("#questions").text(questionBank[i].question);
    $("#0").text(questionBank[i].choices[0]);
    $("#1").text(questionBank[i].choices[1]);
    $("#2").text(questionBank[i].choices[2]);
    $("#3").text(questionBank[i].choices[3]);
    timeRemaining = 11;
};
function correctGuess() {
    correctAnswers++;
    nextQuestion();
    console.log("right: " + correctAnswers);
};
function wrongGuess() {
    incorrectAnswers++;
    nextQuestion();
    console.log("wrong: " + incorrectAnswers);
};
$("#startButton").click(function() {
    $("#questions").text(questionBank[i].question);
    $("#0").text(questionBank[i].choices[0]).attr("data-value", questionBank[i].choices[0]);
    $("#1").text(questionBank[i].choices[1]);
    $("#2").text(questionBank[i].choices[2]);
    $("#3").text(questionBank[i].choices[3]);
    $("#timeLeft").text("Time remaining: " + timeRemaining + " seconds");
    $("#startButton").hide();
    run();
    countDown();
});


$(".answer").on("click", function() {
    console.log($(this));
    console.log("correct = " + questionBank[i].correct)
    console.log("i = " + i);
    if ($(this) === questionBank[i].correct) {
        correctGuess();
    } else {
        wrongGuess();
    }
})
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(countDown, 1000);
  }
function countDown() {
    timeRemaining--;
    $("#timeLeft").text("Time remaining: " + timeRemaining + " seconds");
    if (timeRemaining <= 0) {
        timeRemaining = 11;
        unansweredQuestions++;
        nextQuestion();
        console.log("unanswered: " + unansweredQuestions);
    };
}





/* Questions/right answers:
    1: What street is the pit located? Sullivan Street
    2: What item does Andy's neighbor steal from him while he's bathing in the backyard? Stereo
    3: What does government employee Ron Swanson hate more than anything? Government
    4: What is Ron Swansons hidden talent that he keeps from all his co workers and friends? Playing saxophone
    5: What does Greg Pikitis leave behind after vandalizing the parks department? A peach pit
    6: What illness does Andy say Leslie could be suffering from as she's being taken to the hospital? Network Connectivity Problems
    7: After losing Li'l Sebastion at the Harvest Festival, where does the team find him? Corn Maze
    8: What is the title of the song Andy writes for Li'l Sebastion? 5,000 Candles in the Wind
    9: Ron Swanson only endorses items he uses exclusively and believes in it. What is one of those items? Morton Salt
*/