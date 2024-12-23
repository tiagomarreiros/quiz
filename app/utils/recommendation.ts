import { categoryWeights } from "./weights";

type Scores = Record<string, number>;

export function calculateCategoryScores(answers: string[]): Scores {
  const scores: Scores = {};

  answers.forEach((answer) => {
    const weights = categoryWeights[answer];
    if (weights) {
      for (const category in weights) {
        scores[category] = (scores[category] || 0) + weights[category];
      }
    }
  });

  return scores;
}

export function getBestCategory(scores: Scores): string {
  const sortedCategories = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return sortedCategories[0] ? sortedCategories[0][0] : "";
}
