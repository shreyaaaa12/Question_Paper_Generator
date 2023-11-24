
const fs = require("fs");

class QuestionStore {
  constructor(filePath) {
    this.filePath = filePath;
    this.questions = this.loadQuestions();
  }

  loadQuestions() {
    try {
      const data = fs.readFileSync(this.filePath);
      return JSON.parse(data);
    } catch (error) {
      console.error("Error loading questions:", error.message);
      return [];
    }
  }

  getQuestionsByDifficulty(difficulty) {
    const questionsByDifficulty = this.questions.filter(
      (question) => question.difficulty === difficulty
    );
    questionsByDifficulty.sort((a, b) => b.marks - a.marks);
    return questionsByDifficulty;
  }
}

module.exports = QuestionStore;
