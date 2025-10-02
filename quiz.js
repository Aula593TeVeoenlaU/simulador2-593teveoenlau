// ==========================
// SIMULADOR DE INGRESO
// ==========================

// Preguntas (ACTUALIZADAS)
const questions = [
    // RAZONAMIENTO MATEMÁTICO
    { id: 1, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Sean u y v números reales distintos de 0; ♦ un operador binario, tal que: u ♦ v = -u<sup>v</sup>. Si x = (2 ♦ 3) ♦ 2, entonces: x es igual a:', options: ['a) -128', 'b) 124', 'c) -64', 'd) 64'], answer: 'c' },
    { id: 2, block: 'RAZONAMIENTO MATEMÁTICO', text: '¿Qué proporción del tráfico de abril y mayo de ambos sitios web fue para cuisine.net?', image: 'imagenes/pregunta2_grafico.jpg', imageStyle: 'max-width: 450px;', options: ['a) 29,7%', 'b) 31,3%', 'c) 34,2%', 'd) 38,1%'], answer: 'd' },
    { id: 3, block: 'RAZONAMIENTO MATEMÁTICO', text: 'En un plano xy, la ecuación de una línea recta es x+3y=12. ¿Cuál de las siguientes es la ecuación de una línea perpendicular a la dada?', options: ['a) y = x + 2', 'b) y = -3x + 2', 'c) y = 3x - 6', 'd) y = <span class="frac"><span>1</span><span>3</span></span>x + 6'], answer: 'c' },
    { id: 4, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Sabiendo que:', image: 'imagenes/pregunta4_formula.jpg', imageStyle: 'max-width: 500px;', options: ['a) 9', 'b) 21', 'c) 7', 'd) 49'], answer: 'a' },
    { id: 5, block: 'RAZONAMIENTO MATEMÁTICO', text: 'En la siguiente figura, el círculo está inscrito en el cuadrado de lado 2. ¿Cuál es el área de la región sombreada del círculo?', image: 'imagenes/pregunta5_circulo.jpg', imageStyle: 'max-width: 150px;', options: ['a) π/4', 'b) π/2', 'c) π', 'd) 3π/2'], answer: 'a' },
    { id: 6, block: 'RAZONAMIENTO MATEMÁTICO', text: 'Fernanda hace gelatinas de sandía para la venta. Ella NO compra sandías que pesen menos de 2 libras ni más de 10 libras. Si x representa el peso en libras de las sandías que NO compra Fernanda, ¿cuál de las siguientes opciones representa todos los posibles valores de x?', options: ['a) |x-2|>10', 'b) |x-4|>6', 'c) |x-5|>5', 'd) |x-6|>4'], answer: 'd' },

    // APTITUD ESPACIAL
    { id: 7, block: 'APTITUD ESPACIAL', text: 'Seleccione la mejor alternativa que establezca la secuencia.', image: 'imagenes/pregunta7_secuencia.jpg', imageStyle: 'max-width: 300px;', options: ['a) Opción 1', 'b) Opción 3', 'c) Opción 2', 'd) Opción 4'], answer: 'd' },
    {
        id: 8,
        block: 'APTITUD ESPACIAL',
        text: 'Observe la relación que existe entre las dos primeras figuras. Luego, observe la tercera figura y, de las cuatro opciones siguientes, escoja la figura que se relaciona con esta.',
        image: 'imagenes/pregunta8_analogia.jpg',
        imageStyle: 'max-width: 400px;',
        options: ['a) 2', 'b) 1', 'c) 3', 'd) 4'],
        answer: 'c'
    },
    // ===== PREGUNTA 9 CORREGIDA =====
    {
        id: 9,
        block: 'APTITUD ESPACIAL',
        text: 'Considere la siguiente figura:',
        image: 'imagenes/pregunta9_desplegado.jpg', // Imagen del cubo desplegado
        imageStyle: 'max-width: 200px;',
        textAfterImage: 'Si se dobla para formar un cubo, ¿cuál figura se obtiene?',
        // AÑADIMOS LA IMAGEN CON LAS 4 OPCIONES
        imageOptionsGroup: 'imagenes/pregunta9_opciones.jpg',
        // CAMBIAMOS LAS OPCIONES A TEXTO
        options: ['a) Opción 1', 'b) Opción 2', 'c) Opción 3', 'd) Opción 4'],
        answer: 'b' // La respuesta correcta sigue siendo la 'b'
    },
    { id: 10, block: 'APTITUD ESPACIAL', text: 'Elige la figura que no pertenece a esta categoría:', image: 'imagenes/pregunta10_categoria.jpg', imageStyle: 'max-width: 450px;', options: ['a) Figura 1', 'b) Figura 2', 'c) Figura 3', 'd) Figura 4'], answer: 'c' },

    // APTITUD VERBAL
    { id: 11, block: 'APTITUD VERBAL', text: '<b>Considere el siguiente texto:</b><br><i>Aunque parezca paradójico, los mensajes más cotidianos son los más difíciles de descifrar porque el hablante, dada la poca trascendencia del mensaje o la rapidez con que debe pensarlo, no tiene mucho tiempo para reflexionar sobre él.</i><br>Según el texto, ¿cuáles palabras son equivalentes a “paradójico” y “trascendencia”?', options: ['a) absurdo-importancia', 'b) controversial-eficacia', 'c) incomprensible-necesidad', 'd) cuestionable-consecuencia'], answer: 'a' },
    { id: 12, block: 'APTITUD VERBAL', text: 'Seleccione la alternativa que exprese el significado <b>opuesto</b> al de la palabra escrita en mayúsculas.<br><b>EXÁNIME</b>', options: ['a) vigoroso', 'b) enervado', 'c) acérrimo', 'd) pulquérrimo'], answer: 'a' },
    { id: 13, block: 'APTITUD VERBAL', text: '<b>Considere el siguiente texto y las afirmaciones posteriores:</b><br><i>Los programas “divertidos” tienen mucho rating –y el rating es lo supremo–, no importa a costa de qué valor, ni quien lo financia. Son esos programas donde divertirse es degradar, o donde todo se banaliza. Como, si habiendo perdido la capacidad para la grandeza, nos conformáramos con una comedia de regular calidad.</i><br><b>Afirmaciones:</b><br>A. Los programas culturales tienen poca popularidad.<br>B. Las personas seleccionan el programa según el nivel de audiencia.<br>C. La oferta tiende hacia la superficialidad y el entretenimiento.<br>De las anteriores, ¿cuáles se infieren del texto?', options: ['a) Solo A', 'b) Solo C', 'c) A y B', 'd) B y C'], answer: 'b' },
    { id: 14, block: 'APTITUD VERBAL', text: 'Complete la siguiente analogía:<br>__________ es a pacífico como tumulto es a __________', options: ['a) Atlántico - océano', 'b) Mar - lago', 'c) Sosegado - tranquilo', 'd) Tranquilo – alboroto'], answer: 'd' },
    { id: 15, block: 'APTITUD VERBAL', text: 'Seleccione la opción que complete mejor el significado del enunciado:<br>La __________ es la raíz de innumerables y terribles males y contraria a la vida __________', options: ['a) desesperación - agitada', 'b) guerra - celestial', 'c) violencia - espiritual', 'd) bondad - divina'], answer: 'c' }
];


// Mapeo de puntajes (sin cambios)
const scoreMap = {
    0: 0, 1: 500, 2: 570, 3: 635, 4: 695, 5: 750,
    6: 800, 7: 845, 8: 885, 9: 915, 10: 945, 11: 970, 12: 1000, 13: 1000, 14: 1000, 15: 1000
};

// Variables globales (sin cambios)
let currentQuestionIndex = 0;
let timerInterval;
const totalTime = 18 * 60; // 18 minutos
let timeRemaining = totalTime;
let userAnswers = {};
let flaggedQuestions = new Set();
let isQuizSubmitted = false;
let isQuizActive = false; // Para saber si el examen está en curso

// ==========================
// FUNCIONES PRINCIPALES
// ==========================
function startQuiz() {
    if (typeof registerAttempt === 'function') {
        registerAttempt();
    } else {
        console.error("La función registerAttempt no está definida. Asegúrate de que login.js esté cargado.");
    }
    isQuizActive = true;
    currentQuestionIndex = 0;
    timeRemaining = totalTime;
    userAnswers = {};
    flaggedQuestions.clear();
    isQuizSubmitted = false;
    document.getElementById('intro-page-container').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'flex';
    renderQuiz();
    startTimer();
    saveProgress();
}

function renderQuiz() {
    renderNavigation();
    renderQuestion(currentQuestionIndex);
}

function renderNavigation() {
    document.getElementById('math-nav-buttons').innerHTML = '';
    document.getElementById('spatial-nav-buttons').innerHTML = '';
    document.getElementById('verbal-nav-buttons').innerHTML = '';
    questions.forEach((q, index) => {
        const button = document.createElement('button');
        button.textContent = q.id;
        button.onclick = () => {
            renderQuestion(index);
            saveProgress();
        };
        const blockContainerId =
            q.block.includes('MATEMÁTICO') ? 'math-nav-buttons' :
            q.block.includes('ESPACIAL') ? 'spatial-nav-buttons' :
            'verbal-nav-buttons';
        if (userAnswers[q.id]) button.classList.add('answered');
        if (flaggedQuestions.has(q.id)) button.classList.add('flagged');
        if (index === currentQuestionIndex) button.classList.add('active');
        document.getElementById(blockContainerId).appendChild(button);
    });
}

// ===== FUNCIÓN RENDERQUESTION ACTUALIZADA =====
function renderQuestion(index) {
    currentQuestionIndex = index;
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    const q = questions[index];
    document.getElementById('section-title').textContent = q.block;
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question active';

    // Lógica para manejar texto antes y después de la imagen
    let html = `<h3>Pregunta ${q.id}.</h3><p>${q.text}</p>`;

    if (q.image) {
        const style = q.imageStyle || '';
        html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
    }

    if (q.textAfterImage) {
        html += `<p>${q.textAfterImage}</p>`;
    }

    // Si existe una imagen de opciones agrupadas, la mostramos aquí
    if (q.imageOptionsGroup) {
        html += `<div class="image-container"><img src="${q.imageOptionsGroup}" alt="Opciones para el ejercicio ${q.id}" style="max-width: 400px;"></div>`;
    }

    html += '<div class="options">';
    if (q.optionImages) {
        const containerClass = q.id === 10 ? 'image-options-container-vertical' : 'image-options-container';
        html += `<div class="${containerClass}">`;
        q.options.forEach((option, i) => {
            const optionValue = String.fromCharCode(97 + i);
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label class="image-option-label">
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    <span>${option}</span>
                    <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                </label>
            `;
        });
        html += `</div>`;
    } else {
        q.options.forEach((option, i) => {
            const optionValue = option.charAt(0).toLowerCase();
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label>
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    ${option}
                </label>
            `;
        });
    }
    html += '</div>';
    questionDiv.innerHTML = html;
    container.appendChild(questionDiv);
    updateNavigationButtons();
}


function handleOptionClick(questionId, element) {
    userAnswers[questionId] = element.value;
    saveProgress();
    renderNavigation();
}

function updateNavigationButtons() {
    document.getElementById('next-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'block';
    document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    const flagBtn = document.getElementById('flag-btn');
    if (flaggedQuestions.has(questions[currentQuestionIndex].id)) {
        flagBtn.style.backgroundColor = '#ffc107';
    } else {
        flagBtn.style.backgroundColor = '#6c757d';
    }
    renderNavigation();
}

function toggleFlaggedQuestion() {
    const currentId = questions[currentQuestionIndex].id;
    if (flaggedQuestions.has(currentId)) {
        flaggedQuestions.delete(currentId);
    } else {
        flaggedQuestions.add(currentId);
    }
    saveProgress();
    updateNavigationButtons();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
        saveProgress();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
        saveProgress();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
            return;
        }
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (timeRemaining % 5 === 0) {
            saveProgress();
        }
    }, 1000);
}

function submitQuiz() {
    if (isQuizSubmitted) return;
    clearInterval(timerInterval);
    isQuizSubmitted = true;
    isQuizActive = false;
    localStorage.removeItem("quizState");

    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'flex';
    displayResultsPage();
}

function calculateResults() {
    let correctAnswers = 0;
    questions.forEach(q => {
        if (userAnswers[q.id] === q.answer) {
            correctAnswers++;
        }
    });
    return { correctAnswers, totalQuestions: questions.length };
}

function displayResultsPage() {
    const existingAdjustedScore = document.querySelector('.adjusted-score-display');
    if (existingAdjustedScore) {
        existingAdjustedScore.remove();
    }
    const results = calculateResults();
    const resultsScoreEl = document.querySelector('.results-score');
    resultsScoreEl.textContent = `Aciertos: ${results.correctAnswers} / ${results.totalQuestions} (${(results.correctAnswers / results.totalQuestions * 100).toFixed(1)}%)`;
    const adjustedScore = scoreMap[Math.min(results.correctAnswers, 15)] || 0;
    const adjustedScoreEl = document.createElement('p');
    adjustedScoreEl.className = 'results-score adjusted-score-display';
    adjustedScoreEl.style.marginTop = '15px';
    adjustedScoreEl.style.fontSize = '2.8em';
    adjustedScoreEl.innerHTML = `Puntuación Final: <strong style="color: var(--accent-color);">${adjustedScore} / 1000</strong>`;
    resultsScoreEl.parentNode.insertBefore(adjustedScoreEl, resultsScoreEl.nextSibling);
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = '';
    questions.forEach(q => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.answer;
        const block = document.createElement('div');
        block.className = 'results-question-block';

        let html = `<h4>Pregunta ${q.id}. ${q.block}</h4><p>${q.text}</p>`;
        if (q.image) {
            const style = q.imageStyle || '';
            html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
        }
        if (q.textAfterImage) {
            html += `<p>${q.textAfterImage}</p>`;
        }
        // También mostramos la imagen de opciones agrupadas en los resultados si existe
        if (q.imageOptionsGroup) {
            html += `<div class="image-container"><img src="${q.imageOptionsGroup}" alt="Opciones para el ejercicio ${q.id}" style="max-width: 400px;"></div>`;
        }

        html += '<div class="options">';
        if (q.optionImages) {
            const containerClass = q.id === 10 ? 'image-options-container-vertical' : 'image-options-container';
            html += `<div class="${containerClass}">`;
            q.options.forEach((option, i) => {
                const optionValue = String.fromCharCode(97 + i);
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = 'image-option-label';
                if (isSelected && isCorrect) labelClass += ' correct';
                else if (isSelected && !isCorrect) labelClass += ' incorrect';
                else if (isTheCorrectAnswer) labelClass += ' correct';
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        <span>${option}</span>
                        <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                    </label>`;
            });
            html += `</div>`;
        } else {
            q.options.forEach((option, i) => {
                const optionValue = option.charAt(0).toLowerCase();
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = '';
                if (isSelected && isCorrect) labelClass = 'correct';
                else if (isSelected && !isCorrect) labelClass = 'incorrect';
                else if (isTheCorrectAnswer) labelClass = 'correct';
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        ${option}
                    </label>`;
            });
        }
        html += '</div>';
        if (!isCorrect) {
            const userAnswerText = userAnswer ? `Tu respuesta: ${userAnswer.toUpperCase()}.` : 'No respondiste.';
            html += `<p style="color: red; margin-top: 10px;">${userAnswerText} Respuesta correcta: <strong>${q.answer.toUpperCase()}</strong></p>`;
        } else {
            html += `<p style="color: green; margin-top: 10px;">¡Respuesta correcta!</p>`;
        }
        block.innerHTML = html;
        resultsContent.appendChild(block);
    });
}


// ==========================================================
// ===== SECCIÓN CORREGIDA: GUARDAR, RESTAURAR Y CIERRE =====
// ==========================================================
function saveProgress() {
    if (!isQuizActive || isQuizSubmitted) return;

    const state = {
        currentQuestionIndex,
        userAnswers,
        timeRemaining,
        flaggedQuestions: Array.from(flaggedQuestions)
    };
    localStorage.setItem("quizState", JSON.stringify(state));
}

function restoreProgress() {
    const savedState = localStorage.getItem("quizState");
    if (savedState) {
        const saved = JSON.parse(savedState);
        isQuizActive = true;
        document.getElementById('intro-page-container').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'flex';
        currentQuestionIndex = saved.currentQuestionIndex || 0;
        userAnswers = saved.userAnswers || {};
        timeRemaining = saved.timeRemaining || totalTime;
        flaggedQuestions = new Set(saved.flaggedQuestions || []);
        renderQuiz();
        startTimer();
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    if (typeof supabaseClient === 'undefined') {
        console.error("Supabase client no encontrado.");
        return;
    }
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session && localStorage.getItem("quizState")) {
        currentUser = session.user;
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
        restoreProgress();
    }
});

// 1. ADVERTENCIA: Se ejecuta ANTES de que el usuario abandone la página.
window.addEventListener("beforeunload", (e) => {
    if (isQuizActive && !isQuizSubmitted) {
        const confirmationMessage = '¡Atención! Si cierras o recargas la pestaña, tu intento se enviará automáticamente. ¿Estás seguro?';
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    }
});

// 2. ACCIÓN FINAL: Se ejecuta cuando el usuario abandona la página (más fiable que 'unload').
window.addEventListener("pagehide", () => {
    if (isQuizActive && !isQuizSubmitted) {
        saveProgress();
    }

});
