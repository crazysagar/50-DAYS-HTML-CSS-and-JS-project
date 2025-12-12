const quizData = [
  {
    question: "Which HTML tag is used to define a hyperlink?",
    a: "<a>",
    b: "<h1>",
    c: "<link>",
    d: "<p>",
    correct: "a",
  },
  {
    question: "What does CSS stand for?",
    a: "Creative Style Sheets",
    b: "Computer Style Sheets",
    c: "Cascading Style Sheets",
    d: "Colorful Style Sheets",
    correct: "c",
  },
  {
    question: "In the CSS box model, which property creates space *outside* an element's border?",
    a: "padding",
    b: "margin",
    c: "border",
    d: "outline",
    correct: "b",
  },
  {
    question: "What is the primary purpose of the <!DOCTYPE html> declaration?",
    a: "To link a stylesheet",
    b: "To load a script",
    c: "To set the page language",
    d: "To ensure the browser uses 'standards mode'",
    correct: "d",
  }
]

    const quiz = document.getElementById('quiz');
    const answerEls = document.querySelectorAll('.answer');
    const questionEl = document.getElementById('question');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const submitBtn = document.getElementById('submit');

    let currentQuiz = 0
    let score = 0

    loadQuiz()

    function loadQuiz() {
        deselectAnswers()

        const currentQuizData = quizData[currentQuiz]

        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.a
        b_text.innerText = currentQuizData.b
        c_text.innerText = currentQuizData.c
        d_text.innerText = currentQuizData.d
    };

    function deselectAnswers() {
        answerEls.forEach(answerEl => answerEl.checked = false)
    };

    function getSelected() {
        let answer 

        answerEls.forEach(answerEl => {
            if(answerEl.checked) {
                answer = answerEl.id
            }
        })
        return answer
    };

    submitBtn.addEventListener('click', () => {
        const answer = getSelected();
        
        if(answer) {
            if(answer === quizData[currentQuiz].correct) {
                score++
            }

            currentQuiz++

            if(currentQuiz < quizData.length) {
                loadQuiz()
            } else {
                quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                
                <button onclick="location.reload()">Reload</button>`
            }
        }
    })