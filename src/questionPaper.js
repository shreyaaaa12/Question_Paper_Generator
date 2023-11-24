
const fs = require("fs");

class QuestionPaper {
  generateOutput(filePath, questionPaper) {
    try {
      let totalMarks = 0;
      let marksDistribution = {
        Easy: { questions: 0, marks: 0 },
        Medium: { questions: 0, marks: 0 },
        Hard: { questions: 0, marks: 0 },
      };
      questionPaper.forEach((element) => {
        let marks = element.marks;
        totalMarks += marks;
        marksDistribution[element.difficulty].questions += 1;
        marksDistribution[element.difficulty].marks += marks;
      });
      const data = {
        "Question Paper": questionPaper,
        "Total Marks": totalMarks,
        "Marks Distribution": marksDistribution,
      };
      fs.writeFileSync(filePath, JSON.stringify(data));
      
      return true;
    } catch (error) {
      console.error("Error generating output:", error.message);
      return false;
    }
  }
}

module.exports =  QuestionPaper;
