const questions = [
  {
    question: "What are Blue Jays known for?",
    answers: [
      {text: "blue plumages", correct: false},
      {text: "intriguing behaviours", correct: false},
      {text: "adaptability to various enviornments", correct: false},
      {text: "all of the above", correct: true},
      ]
  },
  {
    question: "What length are Blue Jays typically?",
    answers: [
      {text: "35-42cm", correct: false},
      {text: "18-26cm", correct: false},
      {text: "26-33cm", correct: false},
      {text: "22-30cm", correct:true},
      ]
  },
  {
    question: "What do blue Jays typically weigh between?",
    answers: [
      {text: "70-114grams", correct: false},
      {text: "65-109 grams", correct: true},
      {text: "68-112grams", correct: false},
      {text: "62-106grams", correct: false},
      ]
  },
  {
    question: "What colour are mockingbirds?",
    answers: [
      {text: "gray-brown", correct: true},
      {text: "blue-brown", correct: false},
      {text: "gray-black", correct: false},
      {text: "blue-black", correct: false},
      ]
  },
  {
    question: "what makes mockingbirds agile in flight?",
    answers: [
      {text: "long tails and slender bodies", correct: true},
      {text: "long bodies and slender tails", correct: false},
      {text: "slender bodies and slender tails", correct: false},
      {text: "long bodies and slender tails", correct: false},
      ]
  },
  {
    question: "What kinda diet do mockingbirds typically have?",
    answers: [
      {text: "carnivore", correct: false},
      {text: "vegetarian", correct:false},
      {text: "omnivore", correct: true},
      {text: "vegan", correct: false},
      ]
  },
  {
    question: "Where are toucans native to?",
    answers: [
      {text: "Asia", correct: false},
      {text: "Central and south america", correct: true},
      {text: "Eastern europe", correct: false},
      {text: "northen africa ", correct: false},
      ]
  },
  {
    question: "How long can their bills be?",
    answers: [
      {text: "as long as their bodies", correct: true},
      {text: "as long as their tails", correct: false},
      {text: "as short as their bodies", correct: false},
      {text: "as short as their tails", correct: false},
      ]
  },
  {
    question: "What is a toucans bill made of?",
    answers: [
      {text: " made of a honeycomb structure of keratin", correct: true},
      {text: " made of a honeycomb structure of carbon", correct: false},
      {text: "made of a honeycomb structure of ammonium", correct: false},
      {text: " made of a honeycomb structure of chitin ", correct: false},
      ]
  },
  {
    question: "what do toucans primarily feed on?",
    answers: [
      {text: "eggs", correct: false},
      {text: "reptiles", correct: false},
      {text: "insects", correct: false},
      {text: "fruit", correct: true},
      ]
  },
  ];
  
  
  
  



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");







let currentQuestionIndex = 0; 
let score = 0;







function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}




function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
  });
  
}




function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}



function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    const celebratoryGifEmbed = `
<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/xT5LMHxhOfscxPfIfm" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div> `;
    displayGif(celebratoryGifEmbed);
    selectedBtn.classList.add("correct");
    score++;
  }else{
        const sadGifEmbed = `
    <div style="width:100%;height:0;padding-bottom:82%;position:relative;"><iframe src="https://giphy.com/embed/OPU6wzx8JrHna" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
    `;
    displayGif(sadGifEmbed);
    selectedBtn.classList.add("incorrect");
  }
  
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}





function displayGif(gifEmbedCode) {
  const gifContainer = document.getElementById("gif-container");
  gifContainer.innerHTML = gifEmbedCode;
  gifContainer.style.display = "block"; 
}






function showScore(){
  resetState();
  questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
    const gifContainer = document.getElementById("gif-container");
  let gifEmbedCode = '';

  if (score > 5) {
    gifEmbedCode = `
      <div style="width:100%;height:0;padding-bottom:56%;position:relative;">
        <iframe src="https://giphy.com/embed/lMameLIF8voLu8HxWV" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
    `;
  } else {
    gifEmbedCode = `
      <div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/d31w24psGYeekCZy" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
    `;
  }

  gifContainer.innerHTML = gifEmbedCode;
  gifContainer.style.display = "block"; 
}


function handleNextButton(){
  hideGif(); 
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore()
  }
}

      
  


function hideGif() {
  const gifContainer = document.getElementById("gif-container");
  gifContainer.innerHTML = ""; 
  gifContainer.style.display = "none"; 
}






nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})




startQuiz();



                                  