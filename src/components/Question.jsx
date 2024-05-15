// import React, { useState } from 'react';

// function Question({ data, onAnswer }) {
//     const [selectedAnswer, setSelectedAnswer] = useState(null);
//     const [isAnswered, setIsAnswered] = useState(false);

//     const characterImage = '/src/assets//img/Component1.png';

//     const handleAnswerClick = (isCorrect, answerText) => {
//         setSelectedAnswer({ isCorrect, answerText });
//         setIsAnswered(true);
//         onAnswer(isCorrect);
//         setTimeout(() => {
//             setIsAnswered(false);
//             setSelectedAnswer(null);
//         }, 3000);
//     };

//     return (
//         <div className="flex flex-col items-center justify-center w-full h-full">
//             <img src={characterImage} alt="imagen" className="mb-4 w-29 h-33" />
//             <h2 className="text-2xl font-semibold text-black mb-4">{data.question}</h2>
//             <div className="grid grid-cols-2 gap-4 w-full px-4">
//                 {data.answers.map((answer, index) => (
//                     <button
//                         key={index}
//                         className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isAnswered && (answer.text === selectedAnswer?.answerText ? 'ring-2 ring-offset-2 ' + (selectedAnswer.isCorrect ? 'ring-green-500' : 'ring-red-500') : '')}`}
//                         onClick={() => handleAnswerClick(answer.isCorrect, answer.text)}
//                         disabled={isAnswered}
//                     >
//                         {answer.text}
//                     </button>
//                 ))}
//             </div>
//             {isAnswered && (
//                 <div className={`feedback text-lg font-semibold mt-4 ${selectedAnswer.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
//                     {selectedAnswer.isCorrect ? '¡Correcto!' : 'Incorrecto'}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Question;


import React, { useState, useEffect } from 'react';

function Question({ data, onAnswer }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [questionText, setQuestionText] = useState("");
    const characterImage = '/src/assets/img/Component1.png'; // Asegúrate que la ruta está correcta

    useEffect(() => {
        let timer = setTimeout(() => {
            if (questionText.length < data.question.length) {
                setQuestionText(data.question.substring(0, questionText.length + 1));
            }
        }, 100); // Velocidad de la animación letra por letra
        return () => clearTimeout(timer);
    }, [questionText, data.question]);

    const handleAnswerClick = (isCorrect, answerText) => {
        setSelectedAnswer({ isCorrect, answerText });
        setIsAnswered(true);
        onAnswer(isCorrect);
        setTimeout(() => {
            setIsAnswered(false);
            setSelectedAnswer(null);
        }, 3000); // Duración de la visualización del resultado
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="mb-4 flex justify-center items-center">
                <img src={characterImage} alt="Character" className="w-28 h-34 mr-10 " />
                <div className="speech-bubble bg-white p-3 rounded-lg shadow-lg max-w-xs">
                    <p className="text-black text-lg font-semibold">{questionText}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full px-4">
                {data.answers.map((answer, index) => (
                    <button
                        key={index}
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isAnswered && (answer.text === selectedAnswer?.answerText ? 'ring-2 ring-offset-2 ' + (selectedAnswer.isCorrect ? 'ring-green-500' : 'ring-red-500') : '')}`}
                        onClick={() => handleAnswerClick(answer.isCorrect, answer.text)}
                        disabled={isAnswered}
                    >
                        {answer.text}
                    </button>
                ))}
            </div>
            {isAnswered && (
                <div className={`feedback text-lg font-semibold mt-4 ${selectedAnswer.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {selectedAnswer.isCorrect ? '¡Correcto!' : 'Incorrecto'}
                </div>
            )}
        </div>
    );
}

export default Question;
