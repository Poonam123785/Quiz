var quizdata = [

    {
        question: 'Which framework is releted to js',
        a: '.net',
        b: 'flask',
        c: 'react',
        d: 'c',
        correct : 'c'
    },

    {
        question: 'Which is not a programming language',
        a: 'html',
        b: 'C#',
        c: 'python',
        d: 'java',
        correct: 'a'
    },

    {
        question: 'Which is not a framework',
        a: 'react',
        b: 'javascript',
        c: 'angular',
        d: 'django',
        correct: 'b'
    },

    {
        question: 'CSS stands for',
        a: 'casecading style sheet',
        b: 'casecading style state',
        c: 'casecading sheet of style',
        d: 'none',
        correct: 'a'
    },

    {
        question: 'HTML stands for',
        a: 'Hyper Text Markup Language',
        b: 'Hyper Twist Markup Language',
        c: 'Hyper transition markup line',
        d: 'none',
        correct: 'a'
    }
]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')


var submitbtn = document.getElementById('submit')

var currentQuestion = 0
var quizScore = 0

loadQuiz()
function loadQuiz()
{
    deselect()
    question.innerHTML = quizdata[currentQuestion].question
    option_a.innerText = quizdata[currentQuestion].a
    option_b.innerText = quizdata[currentQuestion].b
    option_c.innerText = quizdata[currentQuestion].c
    option_d.innerText = quizdata[currentQuestion].d
    
}
function deselect() {
    answer.forEach(answer => answer.checked = false)
}

submitbtn.addEventListener('click', () => {
    var selectedoption;

    answer.forEach(answer => {
        if (answer.checked) {
            selectedoption = answer.id
        }
    })

    if (selectedoption == quizdata[currentQuestion].correct) {
        quizScore = quizScore+1
    }
    currentQuestion = currentQuestion + 1

    if (currentQuestion == quizdata.length) {
        document.getElementById('quizdiv').innerHTML = `<h1>You have answered ${quizScore}correctly out of ${quizdata.length}</h1 >`
    }
    else {
        loadQuiz()
    }
 })



























    