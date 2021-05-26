 //function test () {
    window.onload = function(){
    let result = {};
    let step = 0;

    function showQuestion(questionNumber){
        document.querySelector(".question").innerHTML = quiz[step]['q'];
        document.querySelector('#quiz_step').innerHTML = step+1;
        let answer = '';
        for (let key in quiz[step]['a']){
            answer += `<button data-v="${key}" class="answer-variant">${quiz[step]['a'][key]}</button>`
        }
        
        document.querySelector(".answer").innerHTML = answer;
    }

    document.onclick = function(event){
        event.stopPropagation();
        if(event.target.classList.contains('answer-variant') && step < quiz.length){
            if(result[event.target.dataset.v] != undefined){
                result[event.target.dataset.v]++;
              //  console.log(result);
            }
            else {
                result[event.target.dataset.v] = 0;
            }
            step++;
            if(step == quiz.length){
                document.querySelector('.question').remove();
                document.querySelector('.answer').remove();
                showResult();
            }
            else{
                showQuestion(step);
            }
        }
        console.log(result);
    }
    
    function showResult() {
       
        let answers;
        let key = Number((result['r']));
        
        switch(true){
            case (key < 10): {
                answers = "Вы набрали "+ key +" верных ответа – это уровень Beginner, рекомендуем начать изучение с нуля. С радостью поможем вам в этом!";
                break;    
            };
            case key >= 10 && key < 17: {
                answers = "Неплохо! Вы набрали "+ key +" правильных ответов – это уровень Elementary. Фундамент знаний заложен, вам следует продолжать изучение. С радостью поможем вам в этом!"
                break;
            };
            case key >= 17: {
                answers = "Очень хорошо! Вы набрали "+ key +" правильных ответов – это уровень Elementary - Pre-Intermediate. С радостью поможем вам в дальнейшем изучении английского языка! "
                break;
            };
            default: answers = "Вы набрали 0 верных ответов – это уровень абсолютный Beginner, рекомендуем начать изучение с нуля. С радостью поможем вам в этом!";
            ;
        }
        
        let div = document.createElement('div');
        div.classList.add('result');
        div.innerHTML = answers;

        $(".quiz").hide();
        
        document.querySelector('.quiz_body').appendChild(div);

    }

    showQuestion(step);
}