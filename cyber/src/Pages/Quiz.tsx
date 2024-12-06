import React, { useState } from "react";
import './Quiz.css';
import ourHacker from '../assets/hackerQuiz.svg';
import Nabar from "../components/Menu/NavBar";
const Quiz: React.FC = () => {
  const questions = [
    {
      questionText: 'Qu’est-ce qu’une attaque par flooding ?',
      answerOptions: [
        { answerText: 'Une surcharge d’un serveur', isCorrect: true },
        { answerText: 'Une interception d’un message', isCorrect: false },
        { answerText: 'Une fausse mise à jour logicielle', isCorrect: false },
      ],
      explication: 'Mauvaise réponse ! En cybersécurité, le flooding sature un système de requêtes. Cela rappelle les tsunamis, qui inondent littéralement des régions entières.',
    },
    {
      questionText: 'À quoi sert un pare-feu (firewall) ?',
      answerOptions: [
        { answerText: 'Protéger contre les accès non autorisés', isCorrect: true },
        { answerText: 'Accélérer le système', isCorrect: false },
        { answerText: 'Stocker des données', isCorrect: false },
      ],
      explication: 'Un pare-feu agit comme un mur de protection, tout comme les récifs coralliens protègent les côtes des vagues destructrices.',
    },
    {
      questionText: 'Qu’est-ce qu’un ransomware ?',
      answerOptions: [
        { answerText: 'Un logiciel malveillant qui bloque un système', isCorrect: true },
        { answerText: 'Une faille de sécurité cachée', isCorrect: false },
        { answerText: 'Une méthode de cryptage', isCorrect: false },
      ],
      explication: 'Un ransomware est comparable à une paralysie musculaire causée par un venin.',
    },
    {
      questionText: 'Quel type d’attaque ressemble à un tsunami dans l’océan ?',
      answerOptions: [
        { answerText: 'Attaque DDoS', isCorrect: true },
        { answerText: 'Spyware', isCorrect: false },
        { answerText: 'Phishing', isCorrect: false },
      ],
      explication: 'Une attaque DDoS, comme un tsunami, submerge son environnement en envoyant une énorme quantité de trafic.',
    },
    {
        questionText: 'Quelle est l’analogie d’un ransomware dans le corps humain ?',
        answerOptions: [
          { answerText: 'AUne toxine paralysant les muscles', isCorrect: true },
          { answerText: 'Une infection lente', isCorrect: false },
          { answerText: 'Une blessure mineure', isCorrect: false },
        ],
        explication: 'Un ransomware agit comme une toxine paralysant les muscles. Il bloque un système ou une fonction clé (comme le mouvement) jusqu’à ce qu’une intervention soit effectuée.',
      },
      {
        questionText: 'Quel mécanisme de cybersécurité ressemble à un récif corallien protégeant les côtes',
        answerOptions: [
          { answerText: 'Un antivirus', isCorrect: false },
          { answerText: 'Un pare-feu', isCorrect: true },
          { answerText: 'Un cryptage', isCorrect: false },
        ],
        explication: 'Une attaque DDoS, comme un tsunami, submerge son environnement en envoyant une énorme quantité de trafic.',
      },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [imageSize, setImageSize] = useState(100); // Initialize the size of the image
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanationText, setExplanationText] = useState('');

  const handleAnswerOptionClick = (isCorrect: boolean, explanation: string) => {
    if (!isCorrect) {
      setExplanationText(explanation);
      setShowExplanation(true);
      setImageSize((prevSize) => Math.min(prevSize - 40, 200)); // Increase size but not above 200px
    } else {
      setScore(score + 1);
      setImageSize((prevSize) => Math.max(prevSize + 30, 50)); // Decrease size but not below 50px
      moveToNextQuestion();
    }
  };

  const moveToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setShowExplanation(false);
      setExplanationText('');
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
    < Nabar/>
      <div className="appQuiz">
        {showScore ? (
          <div className="score-section">
     
          {score > 4 ? (
            <p>Vous êtes un survivant né Bravo!</p>
          ) : (
            <p>Oups… Tu ne survivras pas</p>
          )}
          
        </div>
        
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">{questions[currentQuestion].questionText}</div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(
                      answerOption.isCorrect,
                      questions[currentQuestion].explication
                    )
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
        <div className="svg-container" style={{ width: imageSize, height: imageSize }}>
          <img src={ourHacker} alt="Dynamic SVG" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      <div className="QuizExplination">
      {showExplanation && (
        <>
          <p>{explanationText}</p>
          <button className='buttonNext' onClick={moveToNextQuestion}>Next</button>
          </>
      )}
      </div>
    </>
  );
};

export default Quiz;
