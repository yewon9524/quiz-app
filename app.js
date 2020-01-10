/* eslint-disable strict */
/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
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
      feedback: 'The correct annswer is Pig'
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
      feedback: 'The correct annswer is Duck'
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
      feedback: 'The correct annswer is Horse'
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
      feedback: 'The correct annswer is Lamb'
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
      correctAnswer: 'moo moo',
      feedback: 'The correct annswer is Cow'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};


/*  Generate all HTML contents in the app  */

/*start page
      generates HTML for start page */
function generateStartPage() {
  return `
    <div class='startPage'>
      <p>Old MACDONALD had a farm<br/>
      E-I-E-I-O<br/>
      And on his farm he had a...</p>
      <button id='start' type="button">Let's Begin!</button>
    </div>
    `;
}

  /*question page
      generates all HTML contents in question page*/
function questionPage() {
// console.log('question page running');
  
// function generateQuestions() {
    return `<p>testttt</p>`;
  // }

  // function generateAnswers() {
  //   const answers = STORE.questions[STORE.currentQuestion].answers
  // }
  // function generateProgress() {
  // }
  // function generateScore() {
  // }
}

//   /*Feedback page
//       generates all HTML contents in question page*/
// function generateFeedback() {
// }

//   /*Result page
//       generates all HTML contents in question page*/
// function generateResultPage() {
// }


/*  Render functions  */ 
function renderFunctions() {
  
  if (STORE.quizStarted === false) {
    $('main').html(generateStartPage());
    return;
  }

  else if (STORE.quizStarted === true) {
    $('main').html(questionPage());
    return;
  }
}

/*  handle functions */
function handleStartButton() {
  $('main').on('click', '#start', function(event) {
    STORE.quizStarted = true;
    renderFunctions();
    questionPage();
    console.log('handleStartButton running');
  }); 
}


function letsRunIt() {
renderFunctions();
handleStartButton();
}

$(letsRunIt);



// }
// function handleAnswerSubmit() {
// }
// function handleNextButton() {
// }

// function handle() {
//   handleStartButton();
//   handleAnswerSubmit();
//   handleNextButton();
//   handleRestartButton();
// }


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
 