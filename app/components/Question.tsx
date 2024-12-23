import { QuestionType } from "../types/question";
import { Option } from "./Option";

export const Question = ({
  data,
  handleAnswer,
  optionSelected,
}: {
  data: QuestionType;
  handleAnswer: (questionId: number, optionId: number) => void;
  optionSelected?: number;
}) => {
  const { question, options, id } = data;

  return (
    <div className="flex flex-col align-middle justify-center">
      <div className="mb-5">{question}</div>
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <Option
            key={index}
            data={option}
            handleAnswer={handleAnswer}
            optionSelected={optionSelected}
            questionId={id}
          />
        ))}
      </div>
    </div>
  );
};
