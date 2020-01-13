/* eslint-disable no-console */
/* eslint-disable no-console */
'use strict';
 
const STORE = {
  questions: [
    {
      id: 1,
      question: 'Which of the following animal went “oink oink”?',
      answers: [
        'Cow',
        'Pig',
        'Duck',
        'Horse',
        'Lamb'
      ],
      correctAnswer: 'Pig',
      image: 'images/Farmers.png'
    },
    {
      id: 2,
      question: 'Which of the following animal went “quack quack” ?',
      answers: [
        'Cow',
        'Pig',
        'Duck',
        'Horse',
        'Lamb'
      ],
      correctAnswer: 'Duck',
      image: 'images/Oink.png'
    },
    {
      id: 3,
      question: 'Which of the following animal went “neigh neigh” ?',
      answers: [
        'Cow',
        'Pig',
        'Duck',
        'Horse',
        'Lamb'
      ],
      correctAnswer: 'Horse',
      image: 'images/quack.png'
    },
    {
      id: 4,
      question: 'Which of the following animal went “baa baa” ?',
      answers: [
        'Cow',
        'Pig',
        'Duck',
        'Horse',
        'Lamb'
      ],
      correctAnswer: 'Lamb',
      image: 'images/neigh.png'
    },
    {
      id: 5,
      question: 'Which of the following animal went “moo moo” ?',
      answers: [
        'Cow',
        'Pig',
        'Duck',
        'Horse',
        'Lamb'
      ],
      correctAnswer: 'Cow',
      image: 'images/baa.png'
    }
  ],
  quizStarted: false,
  incorrect: false,
  questionNumber: 0,
  score: 0
};


/*  Generate all HTML contents in the app  */

/******************************** START PAGE HTML ***********************************/
function generateStartPage() {
  console.log('start page running');
  return `
    <section class='startPage'>
      <h3>Old MACDONALD had a farm<br/>
      E-I-E-I-O<br/>
      And on his farm he had a...</h3>
      <button id='start' type="button">Let's Begin!</button>
      <img src='images/Farmers.png'>
    </section>
    `;
}

/*question page
    generates all HTML contents in question page*/

//to generate questions 
function generateQuestions() {
  let currentQuestion = STORE.questions[STORE.questionNumber].question;
  return currentQuestion;
}

//generate five answer choices 
function generateAnswerChoices() {
  let answerChoices = STORE.questions[STORE.questionNumber];
  
  return `
 
    <a class = 'answerButton' tabindex='0' >
        <input type='radio' class = 'answer' name='choice1' id='choice1' value='${answerChoices.answers[0]}' tabindex=1 required>
        <label for='choice1' >${answerChoices.answers[0]}</lable>
    </a>
    <a class = 'answerButton' tabindex='0'>
        <input type='radio' class = 'answer' name='choice1' id='choice2' value='${answerChoices.answers[1]}' tabindex=2 required>
        <label for='choice2'>${answerChoices.answers[1]}</lable>
    </a>
    <a class = 'answerButton' tabindex='0'>
        <input type='radio' class = 'answer' name='choice1' id='choice3' value='${answerChoices.answers[2]}' tabindex=3 required>
        <label for='choice3'>${answerChoices.answers[2]}</lable>
    </a>
    <a class = 'answerButton' tabindex='0'>
        <input type='radio' class = 'answer' name='choice1' id='choice4' value='${answerChoices.answers[3]}' tabindex=4 required>
        <label for='choice4'>${answerChoices.answers[3]}</lable>
    </a>
    <a class = 'answerButton' tabindex='0'>
        <input type='radio' class = 'answer' name='choice1' id='choice5' value='${answerChoices.answers[4]}' tabindex=5 required>
        <label for='choice5'>${answerChoices.answers[4]}</lable>
    </a>
    </div>
  `;
}

function generateProgress() {
  let currentQuestionNumber = STORE.questions[STORE.questionNumber].id;
  return `Question ${currentQuestionNumber} of 5`;
}

/***************************** QUESTION PAGE HTML ******************************/
function generateQuestionPage() {
  console.log('question page running');
  let currentQuestionNumber = STORE.questions[STORE.questionNumber];
  return `
    <form id='question-form' >
        <fieldset>
            <p class='progress'>${generateProgress()}</p>          
            <p class='question'>${generateQuestions()}</p>
            
            <div class='answerOptions'>${generateAnswerChoices()}</div>
            <div class='submit'>
                <button id='submit' disabled type="button">Submit</button>
               </fieldset> 
        </form>
    <img src=${currentQuestionNumber.image}>
    `;
}  

/***************************** CORRECT PAGES HTML ******************************/
function generateFeedbackCorrect() {
  console.log('feedback correct page running');
  let feedbackNextHTML;
      
  if (STORE.questionNumber < STORE.questions.length - 1) {
    const nextQuestion = STORE.questions[STORE.questionNumber+1];
    feedbackNextHTML = `<button id='next' type='button'>Next</button>
              <img src=${nextQuestion.image}>`;
  } else {
    feedbackNextHTML = `<button id='next' type='button'>Next</button>
    <img src= 'images/moo.png'>`;
  }

  return `
    <section class='feedback-correct'>
        <h2>Correct!</h2>
        <section class='currentScore'>
        <h3>${STORE.score} out of 5 Correct</h3> 
        </section>
      ${feedbackNextHTML}
    </section>
    `;
}


/***************************** WRONG PAGES HTML ******************************/
function generateFeedbackWrong() {
  console.log('feedback incorrect page running');
      
  let feedbackNextHTML;
      
  if (STORE.questionNumber < STORE.questions.length - 1) {
    const nextQuestion = STORE.questions[STORE.questionNumber+1];
    feedbackNextHTML = `<button id='next' type='button'>Next</button>
              <img src=${nextQuestion.image}>`;
  } else {
    feedbackNextHTML = `<button id='next' type='button'>Next</button>
    <img src= 'images/moo.png'>`;
  }
      
  return `
          <section class='feedback-wrong'>
              <h2>Incorrect!</h2>
              <h3>The answer was ${STORE.questions[STORE.questionNumber].correctAnswer}</h3>
              <section class='currentScore'>
                  <h3>${STORE.score} out of 5 Correct</h3>
              </section>
              ${feedbackNextHTML}
          </section>
          `;
}

/************************************ RESULT PAGE HTML ***************************************/
function generateResultPage() {
  console.log('result page running');
  
  return `
    <section class='resultPage'>
        <h2>Quiz Results</h2>
        <h3>${STORE.score} out of 5 Correct!</h3>
        <button id='start-over' type='button'>Start Over</button>
        <img src= 'images/moo.png'>
    </section>
  `;
}


/*  Render functions  */ 
function renderFunctions() {
  if (STORE.quizStarted === false) {
    $('main').html(generateStartPage());
    return;
  }

  else if (STORE.questionNumber >=0 && STORE.questionNumber < 5) {
    $('main').html(generateQuestionPage());
    return;
  }

  else if (STORE.questionNumber > 4) {
    $('main').html(generateResultPage());
    return;
  }
}


/*  handle functions */
function handleStartButton() {
  $('body').on('click', '#start', function(event) {
    STORE.quizStarted = true;
    renderFunctions();
    // generateQuestionPage();

    console.log('handleStartButton running');
  }); 
}


function handleSubmitButton() {
  $('body').on('click', '#submit', function(event) {
    event.preventDefault();

    //is answer correct? 
    // :checked selector works for checkboxes, radio buttons, 
    //     and options of select elements.
    let choice = $('input:checked').val();
    let currentQuestion = STORE.questions[STORE.questionNumber];
    
    if (choice === currentQuestion.correctAnswer) {
      STORE.score++;
      $('main').html(generateFeedbackCorrect());
      
      // STORE.incorrect = false;
    } else {
      
      $('main').html(generateFeedbackWrong());
      // STORE.incorrect = true;
    }
    
    // renderFunctions();
    // generateFeedbackCorrect();
  });
}


function handleNextButton() {

  $('body').on('click', '#next', function(event) {
    STORE.questionNumber++;
    renderFunctions();
  });
}


function restart() {
  STORE.quizStarted = false;
  STORE.questionNumber = 0;
  STORE.score = 0; 
}

function handleRestartButton() {
  $('body').on('click', '#start-over', function(event) {
    restart();
    renderFunctions();
  });
}

function enableSubmitButton(){
  $('body').on('click', '.answer', function(event) {
    console.log('enable script running');
    $('#submit').attr('disabled', false);
  }); 
}
// function preventButtonRefresh(){
//   $('body').on('click', '.answerButton', function(event) {
//     event.preventDefault();
// });
// }

function letsRunIt() {
  renderFunctions();
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
  enableSubmitButton();
  preventButtonRefresh();
}

/*************  let's run it ***************/
$(letsRunIt);


// function handle() ;
//   handleNextButton();


// breakdown of this app:
/*
  * the quiz should be rendered to the page
  * go to the next page when pressing start button
  * clik the answer on the multiple choice
  * show the page number
  * show the progress
  * show the result
  * go to the nex page
  * show overall score on the last page
  * start over button on the last page brings user back to the first page
*/





/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */
 