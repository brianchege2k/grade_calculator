document.getElementById('gradingForm').addEventListener('submit', function(event) {
    event.preventDefault()
const score = parseInt(document.getElementById('marks').value)
const gradeOutput = document.querySelector('#gradeOutput')
    if (score >=79 && score <=100){
        gradeOutput.innerText = `Grade for ${score} is A`
        gradeOutput.className = 'grade-output-a'
    }else if (score >=60 && score <79){
        gradeOutput.innerText = `Grade for ${score} is B`
        gradeOutput.className = 'grade-output-b'
    }else if (score >=49 && score <=59){
        gradeOutput.innerText = `Grade for ${score} is C`
        gradeOutput.className = `grade-output-c`
    }else if (score >= 40 && score  <=49){
        gradeOutput.innerText = `Grade for ${score} is D`
        gradeOutput.className = 'grade-output-d'
    }else{
        gradeOutput.innerText = `Grade for ${score} is E`
        gradeOutput.className = 'grade-output-e'
    }
})




