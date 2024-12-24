//import { QuestionType } from "../types/question";

export type CategoryWeights = Record<string, Record<string, number>>;

export const categoryWeights: CategoryWeights = {
  A: { Mindfulness: 2, Spirituality: 1 },
  B: { Spirituality: 2, Philosophy: 1 },
  C: { SelfHelp: 3 },
  D: { Philosophy: 2, Mindfulness: 1 },
};

export const questions = [
  {
    id: 1,
    question: '"Eu sei". De quem é esta frase?',
    options: [
      {
        label: "Alícia",
        value: "A",
        id: 1,
      },
      {
        label: "Cátia",
        value: "B",
        id: 2,
      },
      {
        label: "Tiago",
        value: "C",
        id: 3,
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Quem tem sempre razão?",
    options: [
      {
        label: "Alícia",
        value: "A",
        id: 1,
      },
      {
        label: "Cátia",
        value: "B",
        id: 2,
      },
      {
        label: "Tiago",
        value: "C",
        id: 3,
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 3,
    question: "Quem acha que tem sempre razão?",
    options: [
      {
        label: "Alícia",
        value: "A",
        id: 1,
      },
      {
        label: "Cátia",
        value: "B",
        id: 2,
      },
      {
        label: "Tiago",
        value: "C",
        id: 3,
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "Quem tem a mania de esconder coisas em casa?",
    options: [
      {
        label: "Alícia",
        value: "A",
        id: 1,
      },
      {
        label: "Cátia",
        value: "B",
        id: 2,
      },
      {
        label: "Tiago",
        value: "C",
        id: 3,
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "O que irrita o Tiago?",
    options: [
      {
        label: "Barulho pela manhã.",
        value: "A",
        id: 1,
      },
      {
        label: "Não responderem às suas perguntas",
        value: "B",
        id: 2,
      },
      {
        label: "Sujarem e desarrumarem a casa logo depois de a terem limpo",
        value: "C",
        id: 3,
      },
      {
        label:
          "A Cátia não encontrar o carregador dela pela milésima vez na semana",
        value: "D",
        id: 4,
      },
      {
        label: "Todas as respostas anteriores estão correctas",
        value: "E",
        id: 5,
      },
    ],
    correctAnswer: 5,
  },
  {
    id: 6,
    question: "O que irrita a Cátia?",
    options: [
      {
        label: "Perguntarem a mesma coisa várias vezes",
        value: "A",
        id: 1,
      },
      {
        label: "O miar da Eve",
        value: "B",
        id: 2,
      },
      {
        label: "Não a ouvirem à primeira",
        value: "C",
        id: 3,
      },
      {
        label: "Dizerem-lhe que tem a mania de esconder coisas",
        value: "D",
        id: 4,
      },
      {
        label:
          "Para além das opções anteriores, tudo na vida é capaz de a irritar, incluindo esta pergunta",
        value: "E",
        id: 5,
      },
    ],
    correctAnswer: 5,
  },
];
/*
export const questions: QuestionType[] = [
  {
    id: 1,
    question: "Como descreverias o momento atual da tua vida?",
    options: [
      {
        label: "Estou à procura de mais paz e calma interior.",
        value: "A",
        id: 1,
      },
      {
        label: "Quero encontrar um propósito maior na vida.",
        value: "B",
        id: 2,
      },
      {
        label: "Sinto-me bloqueado(a) e quero superar desafios.",
        value: "C",
        id: 3,
      },
      {
        label: "Quero explorar a minha conexão com o universo.",
        value: "D",
        id: 4,
      },
    ],
  },
  {
    id: 2,
    question: "Qual seria o teu principal objetivo ao ler um livro agora?",
    options: [
      {
        label: "Aprender a viver mais no presente e lidar com o stress.",
        value: "A",
        id: 1,
      },
      {
        label: "Inspirar-me para refletir sobre a minha existência.",
        value: "B",
        id: 2,
      },
      {
        label: "Encontrar ferramentas práticas para melhorar a minha vida.",
        value: "C",
        id: 3,
      },
      {
        label: "Sentir-me mais conectado(a) a algo maior que eu.",
        value: "D",
        id: 4,
      },
    ],
  },
];*/
