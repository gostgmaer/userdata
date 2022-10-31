import React, { useState } from "react";
const date = new Date().toDateString();
function Quizapp() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswerOptionClick = (isCorrect)=>{
    if (isCorrect) {
        setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
  }
  return (

    <div className=" col-10  m-auto">
    <div className=" m-2 rounded-3 card text-center">
      <div className="card-header bg-light">
        Quiz Application Using Static Questions 
      </div>
      <div className="form-group  p-5">
        <label className=" pb-4">
         
          Please Choose a Answer From this Questions
        </label>
        <div>
      {showScore ? (
        <div>
          Your Score {score} out of {questions.length} questions
        </div>
      ) : (
        <div>
          <div>
            <span>Questions {currentQuestion + 1} : </span>
            {questions.length}
          </div>
          <div>{questions[currentQuestion].questionText}</div>
          <div>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button className=" btn btn-primary m-2  "
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
      
      </div>

      <div className="card-footer text-muted">{date}</div>
    </div>
  </div>

   
  );
}

export default Quizapp;
