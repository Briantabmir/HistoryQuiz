import React, { useState, useEffect } from 'react';
import Question from './Question';
import ScoreDisplay from './ScoreDisplay';
import questionsData from '../data/questions.json';

function HistoryQuiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // Seleccionar 5 preguntas aleatorias del JSON
        const shuffledQuestions = questionsData.sort(() => 0.5 - Math.random());
        setQuestions(shuffledQuestions.slice(0, 5));
    }, []);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleRestart = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowScore(false);
        // Seleccionar nuevas 5 preguntas aleatorias
        const shuffledQuestions = questionsData.sort(() => 0.5 - Math.random());
        setQuestions(shuffledQuestions.slice(0, 5));
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                {showScore ? (
                    <ScoreDisplay score={score} totalQuestions={questions.length} onRestart={handleRestart} />
                ) : (
                    questions.length > 0 && (
                        <Question
                            data={questions[currentQuestionIndex]}
                            onAnswer={handleAnswer}
                            currentQuestionIndex={currentQuestionIndex}
                        />
                    )
                )}
            </div>
        </div>
    );
}

export { HistoryQuiz };
