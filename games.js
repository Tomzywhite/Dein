function submitQuiz(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Correct answers
    const answers = {
        q1: "Blue",
        q2: "Pizza",
        q3: "Coffee",
        q4: "Night Reading",
        q5: "Coding"
    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;

    // Check each question
    for (let question in answers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === answers[question]) {
            score++;
        }
    }

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>You scored ${score} out of ${totalQuestions}!</p>`;
    
    // Optionally, reset the form or keep it intact for further attempts
    // document.getElementById('quiz').reset();
}
