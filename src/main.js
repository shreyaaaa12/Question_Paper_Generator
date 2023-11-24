const QuestionStore = require("./questionStore");
const QuestionPaperGenerator = require("./questionPaperGenerator");
const QuestionPaper = require("./questionPaper");

const questionStore = new QuestionStore("./data/questions.json");

const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

const requirements = {
  totalMarks: 200,
  difficultyDistribution: [
    { difficulty: "Easy", percentage: 20 },
    { difficulty: "Medium", percentage: 50 },
    { difficulty: "Hard", percentage: 30 },
  ],
};

const questionPaper = questionPaperGenerator.generateQuestionPaper(
  requirements.totalMarks,
  requirements.difficultyDistribution
);

const generateQuestionPaper = new QuestionPaper().generateOutput(
  "./generated.json",
  questionPaper
);

if (generateQuestionPaper === true) {
  console.log("Question paper generated successfully");
} else {
  console.log("Question paper generated failed");
}
