"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Question } from "./components/Question";
import { questions } from "./utils/weights";
import { Stepper } from "./components/Stepper";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [optionsSelected, setOptionsSelected] = useState<
    {
      questionId: number;
      optionId: number;
    }[]
  >([]);

  const [showWrong, setShowWrong] = useState(false);

  const changeQuestion = (direction: "prev" | "next") => {
    if (direction === "prev" && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (direction === "next" && currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleAnswer = (questionId: number, optionId: number) => {
    const optionSelected = optionsSelected.findIndex(
      (option) => option.questionId === questionId
    );

    if (optionSelected === -1) {
      const newOptions = [...optionsSelected];
      newOptions.push({ questionId, optionId });
      setOptionsSelected(newOptions);
      return;
    }

    setOptionsSelected((prevState) =>
      prevState.map((item, index) =>
        index === optionSelected ? { ...item, optionId } : item
      )
    );
  };

  const { currentQuestionData, optionSelected } = useMemo(() => {
    return {
      currentQuestionData: questions[currentQuestion],
      optionSelected: optionsSelected.find(
        (option) => option.questionId === questions[currentQuestion].id
      )?.optionId,
    };
  }, [currentQuestion, optionsSelected]);

  const validateAnswer = useCallback(() => {
    if (
      optionSelected &&
      currentQuestionData.correctAnswer !== optionSelected
    ) {
      setShowWrong(true);
    } else {
      setShowWrong(false);
    }
  }, [currentQuestionData.correctAnswer, optionSelected]);

  useEffect(() => {
    validateAnswer();
  }, [optionSelected, currentQuestionData, validateAnswer]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-20">
      {!hasStarted ? (
        <button
          onClick={() => setHasStarted(true)}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentQuestion === questions.length - 1}
        >
          Começar
        </button>
      ) : (
        <>
          <Stepper
            currentStep={currentQuestion}
            totalSteps={questions.length}
          />
          <div>
            <Question
              key={currentQuestionData.id}
              data={currentQuestionData}
              handleAnswer={handleAnswer}
              optionSelected={optionSelected}
            />

            {/* Navegação */}
            <div className="mt-4 flex justify-between items-center w-full max-w-md">
              <button
                onClick={() => changeQuestion("prev")}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md shadow disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentQuestion === 0}
              >
                ← Anterior
              </button>
              <button
                onClick={() => changeQuestion("next")}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!optionSelected || showWrong}
              >
                Próxima →
              </button>
            </div>
          </div>
        </>
      )}
      {showWrong && <div>Opppppps</div>}
    </div>
  );
}
