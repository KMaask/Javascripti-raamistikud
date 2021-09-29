import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			image: require('./images/flag1.png'),
			options: [
				{ answer: 'Sweden', isCorrect: false },
				{ answer: 'Norway', isCorrect: false },
				{ answer: 'Denmark', isCorrect: true },
				{ answer: 'Germany', isCorrect: false },
			],
		},
		{
			image: require('./images/flag2.png'),
			options: [
				{ answer: 'Austria', isCorrect: false },
				{ answer: 'Spain', isCorrect: false },
				{ answer: 'Norway', isCorrect: false },
				{ answer: 'Iceland', isCorrect: true },
			],
		},
		{
			image: require('./images/flag3.png'),
			options: [
				{ answer: 'Poland', isCorrect: true },
				{ answer: 'Monaco', isCorrect: false },
				{ answer: 'Malta', isCorrect: false },
				{ answer: 'Ukraine', isCorrect: false },
			],
		},
		{
			image: require('./images/flag4.png'),
			options: [
				{ answer: 'Serbia', isCorrect: false },
				{ answer: 'Italy', isCorrect: false },
				{ answer: 'Bulgaria', isCorrect: true },
				{ answer: 'Hungary', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);


	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);

		}
	};
	function refreshPage() {
		window.location.reload(false);
	}

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<button className="restart" onClick={refreshPage}>RESTART</button>

				</div>

			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='image'><img src={questions[currentQuestion].image} alt="Flag" /></div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].options.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answer}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
