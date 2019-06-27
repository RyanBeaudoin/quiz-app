'use strict';

const IMAGES = [{
  imgSrc: 'https://freedesignfile.com/upload/2017/08/happy-family-cartoon-illustration-vector-05.jpg',
  imgAlt: 'Correct Answer!'
},
{
  imgSrc: 'https://i.dlpng.com/static/png/435434_preview.png',
  imgAlt: 'Wrong Answer'
},
{
  imgSrc: 'http://fixthephoto.com/blog/UserFiles/family-dinner.jpg',
  imgAlt: 'The End'
}
];

const STORE = [
  {
    text: 'How much do you enjoy sleeping?',
    choices: ['I sleep until it’s time to go to the club.', 'It’s what I look forward to most when I wake up.', 'I’ll sleep when I’m dead.', 'I wish I could sleep all day.'],
    answer: 2,
    explanation: 'This is one of the biggest changes! Sleeping in? Not anymore. Get used to the idea of waking up in the middle of the night to change a diaper or provide assurance that there are no monsters in the closet!'
  },
  {  
    text: 'What kind of fun activities would you do with your newborn baby?',
    choices: ['All of the fun stuff! Amusement parks, the zoo, etc…', 'Hibernate. All babies do is sleep, eat, and poop.', 'Road trip!!!', 'Can a baby go into a bar if they aren’t planning to drink?'],
    answer: 1,
    explanation: 'Even with all of the changes that come with being a new parent, you are limited on the newborn friendly activies. Newborns sleep a lot throughout the day, and drink a ton of milk. Getting into a groove takes time, but once you hit your stride and your baby starts to interact with you, everything changes. Get ready to chase them, read books, and play with cool toys!'
  },
  {
    text: 'Are you ok with changing dirty diapers?',
    choices: ['Nothing grosses me out.', 'Where’s the barf bag?', 'I’ll just sit them on the toilet.', 'It can’t be that bad.'],
    answer: 0,
    explanation: 'There\'s really no way to sugar coat this one! A newborns\' digestive system is growing and their primary source of nutrition is liquid, so as you can imagine, the outcome isn\'t always that pretty! If you think that\'s bad wait until they start eating solid foods and kicking and screaming because they don\'t want their diaper changed! The day your child becomes potty trained, you are so proud of their accomplishment and relieved that the diaper stage is over!'
  },
  {
    text: 'What kind of shows do you watch on TV',
    choices: ['Whatever game is on at the bar.', 'Whatever is already on.', 'No one can stop me from watching my favorites.', 'I’m playing video games 24/7.'],
    answer: 1,
    explanation: 'You no longer own the rights to your TV. It\'s now property of your children. You can always rely on their favorite cartoon character to calm a tantrum, but make sure you keep tabs on the remote...it will become more important than ever! In all honesty, I have no clue what parents did before television and youTube! It can be a lifesaver!'
  },
  {  
    text: 'How well do you handle stress?',
    choices: ['Calm, cool, and collected, baby!', 'I tend to curl into fetal position.', 'I have a binder with standard operating procedures for any incident that should arise.', 'I avoid stressful situation at all cost.'],
    answer: 0,
    explanation: 'Being a parent is not always cute smiles, giggles, and cuddles. It can be very, very stressful. There will be times when your newborn is over tired, teething, or just upset and they are inconsolable. Everyone handles stress differently, and you just need to do the best you can to not let your new baby feel that stress. There will be times when this is nearly impossible, the important thing is to role with the punches and do your best!'
  },
  {
    text: 'Does screaming bother you?',
    choices: ['No, I’m in a rock band.', 'As long as it’s not annoying.', 'If someone’s screaming, just ask them to stop.', 'Let it all out!'],
    answer: 3,
    explanation: 'Babies are going to scream and once they are done screaming,they\'ll probably start screaming again! It happens, as it is the only way that a newborn can communicate. Having a colicky baby can be a whole different story, but it\'s important to understand that this a crying baby is normal and do your best to comfort them.'
  },
  {  
    text: 'If you just found out that you were having a kid, how would you feel?',
    choices: ['Not something I’d want to hear right now.', 'RUN!!!', 'Anxious, scared, anxious and anxious.', 'I’m calling everyone to tell the great news!'],
    answer: 3,
    explanation: 'The reaction of hearing the big news can be different for everyone. While the initial news can be shocking, you\'re overall reaction should be positive! You\'re about to have a baby and expand your family. It is a very exciting time filled with new challenges and new experiences!'
  },
  {  
    text: 'Do you have a support system to help when times are stressful?',
    choices: ['Family is everything.', 'Just moved to a new town.', 'I think I have a friend that has a kid?', 'I can do it on my own.'],
    answer: 0,
    explanation: 'Whether or not your support comes from relatives or friends, there will be a time when you need help. The old saying, \"It take a village to raise a child\" is the best way to summarize being a parent. Raising and caring for a newborn is not easy. At times, it is stressful and exhausting. and being able to have an uninterrupted nap can be the difference between sanity and insanity!'
  },
  {  
    text: 'How important is your career to you?',
    choices: ['You mean work?', 'I\’ll be the CEO of my company some day.', 'Work will always take 2nd place to my family.', 'Overtime is where the money is at!'],
    answer: 2,
    explanation: 'Whether you stay at home and watch the kids or come home after a busy day of work, the job does not end. Being a parents is a full-time job that requires attention and care. It is important to have a life outside of your family, but your family will always be there for you at the end of the day and they will need the same from you.'
  },
  {  
    text: 'Do you think you are ready to have a baby?',
    choices: ['There\’s still so much I want to accomplish.', 'What time does the pet store open?', 'Not at this time.', 'I don’t know, but I’d love to have a kid someday.'],
    answer: 3,
    explanation: 'Let\'s be honest, how can you expect to be ready for something that you have yet to experience. You can never really be ready. The most important part is making a decision that you are comfortable with and be prepared to commit to your decision and do the best you can! You got this!'
  },
];

let questionNum = 0;
let score = 0;
let answerImg = 0;
let feedbackText = '';
let questionCounter = '';

const total = STORE.length;

function startQuiz(){
  /*click event to start quiz and render the 1st of 10 questions*/
  $('.btn1').click(()=>{
    $('main').html(generateQuestion());
    $(handleAnswerSubmit);
  });
  console.log('`startQuiz` ran')
}

function handleQuestionCounter(){
  /*display which question number the user is currently on*/
  let questionCounter = $('.question-count').text(`${questionNum + 1} of ${total}`);
  $('.question-count').append(questionCounter);
  console.log('`handleQuestionCounter` ran')
}

function handleScoreCounter(){
  /*display the current score the user has*/
  $('.current_score').text(`Score: ${score}`);
  console.log('`handleScoreCounter` ran')
}

//////////////////////////////////////////////////////*STUCK WITH HOW TO UPDATE QUESTION COUNTER, DISPLAY AND UPDATE SCORE, AND CHECK FOR CORRECT ANSWER*////////////////////////////////////////

function generateQuestion () {
  handleQuestionCounter();
  return `
  <div class="counter"><span class="question-count"></span><span class="score-results"></span></div><div class="main"><form class="current-question"><fieldset class="choices"><legend>${STORE[questionNum].text}</legend><input type="button" role="submit" class="question" name="question" value="${STORE[questionNum].choices[0]}"><br><input type="button" role="submit" class="question" name="question" value="${STORE[questionNum].choices[1]}"><br><input type="button" role="submit" class="question" name="question" value="${STORE[questionNum].choices[2]}"><br><input type="button" role="submit" class="question" name="question" value="${STORE[questionNum].choices[3]}"><br></fieldset></form></div>
  `;
}

function generateFeedback () {
  renderFeedbackText();
  return `
    <div class="counter"><span class="question-count">0 of 10</span><span class="score-results"></span></div>
    <div class="feedback">
    <div class="feedback-container">
      <span class="feedback-header">${feedbackText}</span>
      <picture>
        <img src="${IMAGES[answerImg].imgSrc}" alt="${IMAGES[answerImg].imgAlt}" />
      </picture>
      <span class="feedback-explanation">"${STORE[questionNum].explanation}"</span>
      <input type="button" role="submit" class="question" name="question" value="Next Question">
      </div>
    </div>`;
}

function handleAnswerSubmit(){
  $('.question').click(()=>{
    const choice = $(this).val();
    if (choice === STORE[questionNum].answer) {
      score += 1;
      answerImg = 0;
    } else {
      answerImg = 1;
    }
    $('main').html(generateFeedback());
    console.log('clicked');
  })
  console.log('`handleAnswerSubmit` ran')
}

function renderFeedbackText(){
  if (answerImg === 0) {
    feedbackText = 'Are you my mom?';
  } else {
    feedbackText = 'Close but no pacfier.';
  }
}

function handleNextQuestion(){
  /*click event to proceed to next question after feedback*/
  console.log('`handleNextQuestion` ran')
}

function renderResults(){
  /*display total score and explanation of results*/
  console.log('`renderResults` ran')
}

function handleRestartQuiz(){
  /*click event to restart quiz*/
  console.log('`handleRestartQuiz` ran')
}



function handleQuizApp(){
  startQuiz();
  handleQuestionCounter();
  handleScoreCounter();
  handleAnswerSubmit();
  handleNextQuestion();
  renderResults();
  handleRestartQuiz();
}

$(handleQuizApp);




/*let questionNum = 0;
let score = 0;

function generateItemElement(item) {
  return `
  <header role='heading'><h1>Are You Ready For Parenthood Quiz</h1></header><section><div class='questionResults'><p>Question#<span> 0 </span> of ${quizArray.length}</p></div><div class='scoreResults'><p>Current score: <span>${score}</span></p></div></section><form role='form'><fieldset><legend class='quiz'><p>${quizArray[item].text}</p></legend><input type='button' class='js-submit' role='button' name='question1' value="${quizArray[item].choices[0]}"><br><input type='button' class='js-submit'  role='button' name='question1' value="${quizArray[item].choices[1]}"><br><input type='button' class='js-submit' role='button' name='question1' value="${quizArray[item].choices[2]}"><br><input type='button' class='js-submit' role='button' name='question1' value="${quizArray[item].choices[3]}"><br></fieldset></form>
  `
};

function postQuestion(item) {
  let htmlContent = generateItemElement(item);
  $('.question').html(htmlContent);
}

function handleStartClick() {
  $('.start').click((event)=>{
    postQuestion(questionNum);
  });
}

$(handleStartClick);*/



/*function startQuestion(index, score) {
  console.log(question);
  console.log(quizArray[index]);

  let title = quizArray[index].text;
  let current_question = index;
  let current_answerA = quizArray[index];
  let current_answerB = quizArray[index];
  let current_answerC = quizArray[index];
  let current_answerD = quizArray[index];


  $("#question").html(`<header role='heading'><h1>Are You Ready For Parenthood Quiz</h1></header><section><div class='questionResults'><p>Question<span> ${++current_question}</span> of ${quiz.length}</p></div><div class='scoreResults'><p>Current score: <span>${score}</span></p></div></section><form role='form'><fieldset><legend class='quiz'><p>${title}</p></legend><input type='button' class='js-submit' role='button' name='question1' value="${current_answerA}"><br><input type='button' class='js-submit'  role='button' name='question1' value="${current_answerB}"><br><input type='button' class='js-submit' role='button' name='question1' value="${current_answerC}"><br><input type='button' class='js-submit' role='button' name='question1' value="${current_answerD}"><br></fieldset></form>`);

  $(".js-submit").click(function() {
    if(true) {
      ++score;
    }

    console.log('answerQuestion runs');
    startQuestion(++index, score);
  });
};

$("#start").click(function() {
  startQuestion(0, 0);
});
*/