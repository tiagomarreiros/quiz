import { OptionType } from "./option";

export type QuestionType = {
  id: number;
  question: string;
  options: OptionType[];
};
