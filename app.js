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
  questionNumber: 0,
  score: 0
};



function renderStartPage() {
  $('#main').append(
  `<button id='start' type="button">Let's Begin!</button>`);
};
renderStartPage();



//when user clicks start button, should render question page
function renderQuestionPage() {
  console.log('renderQuestionPage works');

};
function renderFeedbackCorrectPage();
function renderFeedbackWrongPage();
function renderFinalPage();

function startButton() {
  $('#start').on('click', function() {
    event.preventDefault();
  } )
};
function renderQuestion();
function renderMultipleChoice();
function renderCorrectAnswer();
function renderQuestionNumber();
function renderCurrentScore();
function renderNextButton();


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
 