import { useState } from 'react';

function About() {
  const questions = [
    {
      question: 'O que é energia solar?',
      options: [
        'Energia gerada pelo movimento da água',
        'Energia captada por painéis solares a partir da luz do sol',
        'Energia gerada pelo vento',
        'Energia obtida a partir de combustíveis fósseis',
      ],
      answer: 1,
    },
    {
      question: 'Qual é a principal vantagem da energia solar flutuante?',
      options: [
        'Reduz o consumo de energia elétrica',
        'Evita a poluição da água',
        'Economiza espaço em terra e resfria os painéis',
        'Aumenta a velocidade da produção de energia',
      ],
      answer: 2,
    },
    {
      question: 'O que significa kWh?',
      options: [
        'Quilowatt-hora, uma medida de consumo de energia elétrica',
        'Quilogramas de água por hora',
        'Quantidade de energia gerada por um painel solar',
        'Unidade de calor gerado por hora',
      ],
      answer: 0,
    },
    {
      question: 'Qual é um exemplo de energia limpa?',
      options: [
        'Carvão mineral',
        'Energia solar',
        'Petróleo',
        'Energia nuclear',
      ],
      answer: 1,
    },
    {
      question: 'Os painéis solares flutuantes ajudam a:',
      options: [
        'Aumentar a temperatura da água',
        'Reduzir a evaporação da água',
        'Aumentar o consumo de energia',
        'Poluir o ambiente',
      ],
      answer: 1,
    },
    {
      question: 'Qual é o principal componente de um painel solar?',
      options: [
        'Cobre',
        'Silício',
        'Carvão',
        'Alumínio',
      ],
      answer: 1,
    },
    {
      question: 'A energia solar é renovável porque:',
      options: [
        'É gerada por recursos naturais inesgotáveis',
        'Requer pouca manutenção',
        'Pode ser usada em áreas urbanas',
        'Não ocupa muito espaço',
      ],
      answer: 0,
    },
    {
      question: 'Quais são os dois tipos principais de painéis solares?',
      options: [
        'Fotovoltaicos e térmicos',
        'Flutuantes e fixos',
        'Compactos e industriais',
        'Manuais e automáticos',
      ],
      answer: 0,
    },
    {
      question: 'Qual país é líder mundial em energia solar?',
      options: [
        'Brasil',
        'China',
        'Estados Unidos',
        'Alemanha',
      ],
      answer: 1,
    },
    {
      question: 'A energia solar pode ser armazenada em:',
      options: [
        'Baterias',
        'Geradores a diesel',
        'Tanques de água',
        'Fornos solares',
      ],
      answer: 0,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    } else {
      setWrongAnswers((prev) => [
        ...prev,
        { question: questions[currentQuestion].question, correctAnswer: questions[currentQuestion].options[questions[currentQuestion].answer] },
      ]);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setWrongAnswers([]);
  };

  return (
    <div className="quiz">
      <h2>Quiz: Teste seus conhecimentos sobre Energia Solar</h2>
      {showResult ? (
        <div className="result">
          <h3>Você concluiu o quiz!</h3>
          <p>
            Você acertou <strong>{score}</strong> de <strong>{questions.length}</strong> perguntas.
          </p>
          {wrongAnswers.length > 0 && (
            <div className="wrong-answers">
              <h4>Perguntas que você errou:</h4>
              <ul>
                {wrongAnswers.map((item, index) => (
                  <li key={index}>
                    <p>
                      <strong>{index + 1}. {item.question}</strong>
                      <br />
                      Resposta correta: {item.correctAnswer}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button onClick={resetQuiz} className="reset-button">Tentar novamente</button>
        </div>
      ) : (
        <div className="question-card">
          <h3>{questions[currentQuestion].question}</h3>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
