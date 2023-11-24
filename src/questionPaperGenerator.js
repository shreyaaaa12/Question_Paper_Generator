class QuestionPaperGenerator {
  constructor(questionStore) {
    this.questionStore = questionStore;
  }

  selectQuestions(questions, availableMarks) {
    const n = questions.length;

    const dp = new Array(n + 1)
      .fill(null)
      .map(() => new Array(availableMarks + 1).fill(false));

    for (let i = 0; i <= n; i++) {
      dp[i][0] = true;
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= availableMarks; j++) {
        if (questions[i - 1].marks > j) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = dp[i - 1][j] || dp[i - 1][j - questions[i - 1].marks];
        }
      }
    }

    let targetSum = 0;
    for (let s = availableMarks; s >= 0; s--) {
      if (dp[n][s]) {
        targetSum = s;
        break;
      }
    }

    const selectedQuestions = [];
    let i = n;
    let j = targetSum;
    while (i > 0 && j > 0) {
      if (!dp[i - 1][j]) {
        selectedQuestions.push(questions[i - 1]);
        j -= questions[i - 1].marks;
      }
      i -= 1;
    }

     return selectedQuestions;
  }

  generateQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];

    difficultyDistribution.forEach(({ difficulty, percentage }) => {
      let availableMarks = Math.ceil((percentage / 100) * totalMarks);
      const questions = this.questionStore.getQuestionsByDifficulty(difficulty);
      
      questionPaper.push(...this.selectQuestions(questions, availableMarks));
    });

    return questionPaper;
  }
}

module.exports =  QuestionPaperGenerator;
