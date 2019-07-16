'use strict';

function renderQuiz () {
  $('.question').html(generateStartPage());
  $('.current_score').hide();
  $('.question_index').hide();
}

function generateStartPage () {
  return `
    <img id="startImg" src="${IMAGES[0].imgSrc}" alt="${IMAGES[0].imgAlt}"/>
    <br>
    <button type="button" name="start" class="startQuizBtn">
      <p>Let's find out!</p>
    </button>`;
}

function generateQuestions () {
  return `
    <div class="questionContainer">${STORE[questionNum].text}</div>
    <div class="answerContainer">
    <input type="button" role="radio" class="option" value="${STORE[questionNum].choices[0]}">
    <input type="button" role="radio" class="option" value="${STORE[questionNum].choices[1]}">
    <input type="button" role="radio" class="option" value="${STORE[questionNum].choices[2]}">
    <input type="button" role="radio" class="option" value="${STORE[questionNum].choices[3]}"></div>`;
}

function startQuiz () {
  $('.question').on('click', '.startQuizBtn', function (event) {
    $('.current_score').show();
    $('.question').html(generateQuestions());
    $('.question_index').show();
  });
}

function updateScore () {
  $('.current_score').text(`Current Score: ${score}`);
}

function updateIndex () {
  $('.question_index').text(`Question: ${questionNum + 1} of ${total}`);
}

function resultText () {
  if (error === 1) {
    resultsNotification = 'You got it right!';
  } else {
    resultsNotification = 'Sorry, wrong answer!';
  }
}

function generateResult () {
  resultText();
  return `
  <div class="answerResult">${resultsNotification}</div>
  <br>
  <img src="${IMAGES[error].imgSrc}" alt="${IMAGES[error].imgAlt}"/>
  <br>
  <div class="answerExplain">${STORE[questionNum].explanation}</div>
  <br>
  <button type="button" class="nextQuestion" name="next button" value="Next Question">
    <span>Next</span>
  </button>`;
}

function answerPicked () {
  $('.question').on('click', '.option', function (event) {
    const choice = $(this).val();
    if (choice === STORE[questionNum].answer) {
      score += 1;
      error = 1;
      updateScore();
    } else {
      error = 2;
      updateScore();
    }
    $('.question').html(generateResult());
  });
}

function nextQuestion () {
  $('.question').on('click', '.nextQuestion', function (event) {
    if (questionNum === STORE.length - 1) {
      $('.question').html(generateEndPage());
      resetQuiz();
    } else {
      questionNum += 1;
      currentIndex = 0;
      // update index everytime we move to new question
      updateIndex();
      $('.question').html(generateQuestions());
    }
  });
}

function correctFeedback () {
  if (score < 3) {
    feedbackNotification = `Being a parent is not for everyone. Maybe you don't even wan't that...let's just hope that's the case!`
  }
  else if (score < 6) {
    feedbackNotification = `Being a parent might be in your future, but probably not right now!`;
  }
  else {
    feedbackNotification = `You know what, I think you are ready for parenthood, or maybe you already are?!?`;
  }
}

function generateEndPage () {
  correctFeedback();
  $('.current_score').hide();
  $('.question_index').hide();
  return `
    <h2>You got ${score} of ${total} correct!</h2>
    <img id="endImg" src="${IMAGES[IMAGES.length - 1].imgSrc}" alt="${IMAGES[IMAGES.length - 1].imgAlt}" /><br>
    <div class="feebackExplaination">
    ${feedbackNotification}</div>
    <br>
    <button type="button" name="restart" class="restartQuizBtn">
      <span>Try Again?</span>
    </button>`;
}

function initValues () {
  questionNum = 0;
  score = 0;
  error = 0;
}

function resetQuiz () {
  $('.question').on('click', '.restartQuizBtn', function (event) {
    initValues();
    updateScore();
    updateIndex();
    renderQuiz();
  });
}

function handleQuiz () {
  renderQuiz();
  generateStartPage();
  startQuiz();
  updateScore();
  updateIndex();
  answerPicked();
  nextQuestion();
}

$(handleQuiz);