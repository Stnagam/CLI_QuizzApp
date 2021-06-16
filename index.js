 const openingPage = () => {
   console.log("***************************");
   console.log("       Hello!!");
   console.log("  Welcome to CRICquizz!!");
   console.log("***************************");
}

const instructions = (name) => {
  console.log();
  console.log("Welcome to CRICquizz mate!!!");
  console.log("PLEASE FOLLOW THE INSTRUCTIONS" + " " + name.toUpperCase());
  console.log("Each question will have four choices of which only one is correct.");
  console.log("You will have only one chance to guess the correct answer.\n");
  console.log("All the best!\n".toUpperCase());
}

const questionsDisplay = () => {
  console.log();
  console.log('Here is your first Question..... ');
  for(let i = 0; i < count; i++) {
    console.log();
    console.log("Q" + (i+1).toString() + ". " + questions[i]['question'] + '\n');
    let optNum = questions[i]['options'].length;
    for(const opts of questions[i]['options']) {
      console.log('(' + (questions[i]['options'].length - (optNum--) + 1).toString() + ') ' + opts + '\n');
    }
    const choice = readLineSync.question("enter your choice : ");
    validate(questions[i], choice);
    console.log();
    
  }
  console.log('End of Quiz!!! '); 
}

function validate(q, ch) 
{
  if(![1,2,3,4].includes(Number(ch))) {
    console.log("You entered an invalid choice");
  }

  else if(q['answer'].toString() === ch) {
    console.log("Well done!! you have answered correctly.");
    ++score;
  }

  else {
    console.log("Oopsie!! That is incorrect");
    console.log("The correct answer is : " + q['answer'].toString());
  }

  console.log();
}



const conclusion = (score, count, name) => {
  if (score === 0) {
  console.log("Oops!! you have scored " + score + " out of " + count);
  console.log("Practice to get better.");
  }
  else if(score<count/2) {
  console.log("Well played!! you have scored " + score + " out of " + count);
  console.log("Keep trying, you can improve");
  }
  else {
  console.log("Congratulations you have scored " + score + " out of " + count);
  }
}
function main() {
  questionsDisplay();
  conclusion(score, count, name);
  const again = readLineSync.question('wanna try again? (y to continue / any other key to quit)\t');
  if(again === 'y') {
    score = 0; 
    main();
  }
  console.log("Thanks for playing " + name + ". Good Bye!!\n");
}
const readLineSync = require('readline-sync');
openingPage();
const name = readLineSync.question("\nPlease enter your name : ");
instructions(name);

const questions = [
  {
    question : "Which countries are the latest full time members of the ICC?",
    options : [ "Afghanistan and Ireland", "Bangladesh and Nepal",  "Trinidad & Tobago and Burundi",  "None of the above" ],
    answer : 1
  },

  {
    question : "Which of the following is the oldest test cricket playing country in the world?", 
    options : [ "Australia", "India", "West Indies", "South Africa" ],
    answer : 1
  },

  {
    question : "Where is the headquarter of the ICC?",
    options : [ "London", "Cape town", "Sydney", "Dubai" ],
    answer : 4
  }, 

  {
    question : "When was ICC established?",
    options : [ 1953, 1909, 1960, 1877],
    answer : 2
  },

  {
    question : "Which of the following international competition is not organized by the ICC?",
    options : [ "Champions Trophy", "World Cricket League", "Under-19 Cricket World Cup", "Syed Mushtaq Ali Trophy" ],
    answer : 4
  }

];
const count = questions.length; // total number of questions
let score = 0; // for showing the user score
main();