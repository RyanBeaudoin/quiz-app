'use strict';

const STORE = [
  {
    text: 'How much do you enjoy sleeping?',
    choices: ['I sleep until it’s time to go to the club.', 'It’s what I look forward to most when I wake up.', 'I’ll sleep when I’m dead.', 'I wish I could sleep all day.'],
    answer: 2,
    /*imgSrc: 'https://s3.eu-central-1.amazonaws.com/sol-assets/uploads/public/5ae/093/790/thumb_67150_300_300_0_0_crop.jpg', 
    imgAlt: 'Correct Answer',*/
    explanation: 'This is one of the biggest changes! Sleeping in? Not anymore. Get used to the idea of waking up in the middle of the night to change a diaper or provide assurance that there are no monsters in the closet!'
  },
  {  
    text: 'What kind of fun activities would you do with your newborn baby?',
    choices: ['All of the fun stuff! Amusement parks, the zoo, etc…', 'Hibernate. All babies do is sleep, eat, and poop.', 'Road trip!!!', 'Can a baby go into a bar if they aren’t planning to drink?'],
    answer: 1,
    /*imgSrc: 'http://www.makeitcrafty.com/images/detailed/3/Geeky-Love-New-Parents-web.jpg',
    imgAlt: 'Correct Answer',*/
    explanation: 'Even with all of the changes that come with being a new parent, you are limited on the newborn friendly activies. Newborns sleep a lot throughout the day, and drink a ton of milk. Getting into a groove takes time, but once you hit your stride and your baby starts to interact with you, everything changes. Get ready to chase them, read books, and play with cool toys!'
  },
  {
    text: 'Are you ok with changing dirty diapers?',
    choices: ['Nothing grosses me out.', 'Where’s the barf bag?', 'I’ll just sit them on the toilet.', 'It can’t be that bad.'],
    answer: 0,
    /*imgSrc: 'https://media.istockphoto.com/vectors/dirty-diaper-vector-id696342376?k=6&m=696342376&s=612x612&w=0&h=fBfHl5aUwDE0VISnqkelcaShM6iBvageIgiwNvBnVYM=',
    imgAlt: 'Correct Answer',*/
    explanation: 'There\'s really no way to sugar coat this one! A newborns\' digestive system is growing and their primary source of nutrition is liquid, so as you can imagine, the outcome isn\'t always that pretty! If you think that\'s bad wait until they start eating solid foods and kicking and screaming because they don\'t want their diaper changed! The day your child becomes potty trained, you are so proud of their accomplishment and relieved that the diaper stage is over!'
  },
  {
    text: 'What kind of shows do you watch on TV',
    choices: ['Whatever game is on at the bar.', 'Whatever is already on.', 'No one can stop me from watching my favorites.', 'I’m playing video games 24/7.'],
    answer: 1,
    /*imgSrc: 'https://www.kidsworldfun.com/blog/wp-content/uploads/2014/05/kids-watching-tv.jpg',
    imgAlt: 'Correct Answer',*/
    explanation: 'You no longer own the rights to your TV. It\'s now property of your children. You can always rely on their favorite cartoon character to calm a tantrum, but make sure you keep tabs on the remote...it will become more important than ever! In all honesty, I have no clue what parents did before television and youTube! It can be a lifesaver!'
  },
  {  
    text: 'How well do you handle stress?',
    choices: ['Calm, cool, and collected, baby!', 'I tend to curl into fetal position.', 'I have a binder with standard operating procedures for any incident that should arise.', 'I avoid stressful situation at all cost.'],
    answer: 0,
    /*imgSrc: 'https://i.pinimg.com/originals/37/22/f4/3722f4f24e79a1573a85d4ea9d32006a.jpg',
    imgAlt: 'Correct Answer',*/
    explanation: 'Being a parent is not always cute smiles, giggles, and cuddles. It can be very, very stressful. There will be times when your newborn is over tired, teething, or just upset and they are inconsolable. Everyone handles stress differently, and you just need to do the best you can to not let your new baby feel that stress. There will be times when this is nearly impossible, the important thing is to role with the punches and do your best!'
  },
  {
    text: 'Does screaming bother you?',
    choices: ['No, I’m in a rock band.', 'As long as it’s not annoying.', 'If someone’s screaming, just ask them to stop.', 'Let it all out!'],
    answer: 3,
    /*imgSrc: 'https://i.dlpng.com/static/png/435434_preview.png',
    imgAlt: 'Correct Answer',*/
    explanation: 'Babies are going to scream and once they are done screaming,they\'ll probably start screaming again! It happens, as it is the only way that a newborn can communicate. Having a colicky baby can be a whole different story, but it\'s important to understand that this a crying baby is normal and do your best to comfort them.'
  },
  {  
    text: 'If you just found out that you were having a kid, how would you feel?',
    choices: ['Not something I’d want to hear right now.', 'RUN!!!', 'Anxious, scared, anxious and anxious.', 'I’m calling everyone to tell the great news!'],
    answer: 3,
    /*imgSrc: 'https://www.heretohelp.bc.ca/sites/default/files/images/t2p-front-cover.jpg',
    imgAlt: 'Correct Answer',*/
    explanation: 'The reaction of hearing the big news can be different for everyone. While the initial news can be shocking, you\'re overall reaction should be positive! You\'re about to have a baby and expand your family. It is a very exciting time filled with new challenges and new experiences!'
  },
  {  
    text: 'Do you have a support system to help when times are stressful?',
    choices: ['Family is everything.', 'Just moved to a new town.', 'I think I have a friend that has a kid?', 'I can do it on my own.'],
    answer: 0,
    /*imgSrc: 'https://static1.squarespace.com/static/568c3b5c0e4c114023d4ce8e/t/5888cd7c86e6c04d3a744b17/1485360522350/',
    imgAlt: 'Correct Answer',*/
    explanation: 'Whether or not your support comes from relatives or friends, there will be a time when you need help. The old saying, \"It take a village to raise a child\" is the best way to summarize being a parent. Raising and caring for a newborn is not easy. At times, it is stressful and exhausting. and being able to have an uninterrupted nap can be the difference between sanity and insanity!'
  },
  {  
    text: 'How important is your career to you?',
    choices: ['You mean work?', 'I\’ll be the CEO of my company some day.', 'Work will always take 2nd place to my family.', 'Overtime is where the money is at!'],
    answer: 2,
    /*imgSrc: 'https://everydaypower.com/wp-content/uploads/2018/02/busy-parents-min.jpg',
    imgAlt: 'Correct Answer',*/
    explanation: 'Whether you stay at home and watch the kids or come home after a busy day of work, the job does not end. Being a parents is a full-time job that requires attention and care. It is important to have a life outside of your family, but your family will always be there for you at the end of the day and they will need the same from you.'
  },
  {  
    text: 'Do you think you are ready to have a baby?',
    choices: ['There\’s still so much I want to accomplish.', 'What time does the pet store open?', 'Not at this time.', 'I don’t know, but I’d love to have a kid someday.'],
    answer: 3,
    /*imgSrc: 'https://freedesignfile.com/upload/2017/08/happy-family-cartoon-illustration-vector-05.jpg',
    imgAlt: 'Correct Answer',*/
    explanation: 'Let\'s be honest, how can you expect to be ready for something that you have yet to experience. You can never really be ready. The most important part is making a decision that you are comfortable with and be prepared to commit to your decision and do the best you can! You got this!'
  },
];

let questionNum = 0;
let score = 0;
let error = 0;
let mistake = 0;

const total = STORE.length;

function renderQuestions(){
  /*click event to start quiz and render the 1st of 10 questions*/
  let questionNum = 0;
  $('.btn1').click(()=>{
    $('main').html(`
    <div class="counter"><span class="question-count">0 of 10</span><span class="score-results"></span></div><div class="main"><form class="current-question"><fieldset class="choices"><legend>${STORE[questionNum].text}</legend><input type="button" role="submit" class="question" name="question" value="${STORE[questionNum].choices[0]}"><br><input type="button" role="submit" class="question" name="question" value="${STORE[questionNum].choices[1]}"><br><input type="button" role="submit" class="question" name="question" value="${STORE[questionNum].choices[2]}"><br><input type="button" role="submit" class="question" name="question" value="${STORE[questionNum].choices[3]}"><br></fieldset></form></div>
    `);
  });
  console.log('`renderQuestions` ran')
}

function handleQuestionCounter(){
  /*display which question number the user is currently on*/
  $('.question-count').text(`${questionNum + 1} of ${total}`);
  console.log('`handleQuestionCounter` ran')
}

function handleScoreCounter(){
  /*display how amount of answers the user has guessed correctly*/
  console.log('`handleScoreCounter` ran')
}

function handleAnswerSubmit(){
  $('.question').click(()=>{
    $('main').html(`<div class="counter"><span class="question-count">0 of 10</span><span class="score-results"></span></div>
    <div class="feedback">
    <div class="feedback-container">
      <div class="feedback-header"></div>
      <div class="feedback-explanation"></div>
      <picture>
          <img class="feedback-image" alt="Feedback Image">
        </picture>
      <div class="feedback-text"></div>
      <button class="next-question"></button>
    </div>
  </div>`);
    console.log('clicked');
  })
  console.log('`handleAnswerSubmit` ran')
}

function renderFeedback(){
  /*provide explanation for correct answer and feedback on whether answer selected was correct or wrong*/
  console.log('`renderFeedback` ran')
}

function handleNextQuestion(){
  /*click event to proceed to next question*/
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
  renderQuestions();
  handleQuestionCounter();
  handleScoreCounter();
  handleAnswerSubmit();
  renderFeedback();
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