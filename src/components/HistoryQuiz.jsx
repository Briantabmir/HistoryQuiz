import React, { useState } from 'react';
import Question from './Question';
import ScoreDisplay from './ScoreDisplay';
import questionsData from '../data/questions.json';

function HistoryQuiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questionsData.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleRestart = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowScore(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
    <div >
        {showScore ? (
            <ScoreDisplay score={score} totalQuestions={questionsData.length} onRestart={handleRestart} />
        ) : (
            <Question
                data={questionsData[currentQuestionIndex]}
                onAnswer={handleAnswer}
                currentQuestionIndex={currentQuestionIndex}
            />
        )}
    </div>
</div>

    );
}


export { HistoryQuiz };