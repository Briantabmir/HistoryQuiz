import React from 'react';

function ScoreDisplay({ score, totalQuestions, onRestart }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Resultado Final</h2>
            <p className="text-lg text-gray-700 mb-4">Has acertado {score} de {totalQuestions} preguntas.</p>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={onRestart}
            >
                Intentar de nuevo
            </button>
        </div>
    );
}

export default ScoreDisplay;
