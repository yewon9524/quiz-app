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

/* Generate all HTML contents in question page*/

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
  let feedbackNextHTML;
      
  if (STORE.questionNumber < STORE.questions.length - 1) {
    const nextQuestion = STORE.questions[STORE.questionNumber+1];
    feedbackNextHTML = `
      <button id='next' type='button'>Next</button>
      <img src=${nextQuestion.image}>
    `;
  } else {
    feedbackNextHTML = `
      <button id='next' type='button'>Next</button>
      <img src= 'images/moo.png'>
    `;
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
  $('body').on('click', '#start', () => {
    STORE.quizStarted = true;
    renderFunctions();
  }); 
}

function handleSubmitButton() {
  $('body').on('click', '#submit', (event) => {
    event.preventDefault();

    let choice = $('input:checked').val();
    let currentQuestion = STORE.questions[STORE.questionNumber];
    
    if (choice === currentQuestion.correctAnswer) {
      STORE.score++;
      $('main').html(generateFeedbackCorrect());
    } else {
      $('main').html(generateFeedbackWrong());
    }
  });
}

function handleNextButton() {
  $('body').on('click', '#next', () => {
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
  $('body').on('click', '#start-over', () => {
    restart();
    renderFunctions();
  });
}

function enableSubmitButton(){
  $('body').on('click', '.answer', () => {
    $('#submit').attr('disabled', false);
  }); 
}

function letsRunIt() {
  renderFunctions();
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
  enableSubmitButton();
}

/*************  let's run it ***************/
$(letsRunIt);