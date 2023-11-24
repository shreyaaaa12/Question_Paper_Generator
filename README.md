# Question_Paper_Generator
This Node-js project is a question paper generator, which helps users to create a question paper. 
# Description of the Project 
This project contains following components : 
Folder Structure:
data folder: JSON formatted set of questions.
src folder: It has most of the project elements.

Key Files:
main.js: It imports crucial modules such as QuestionStore, QuestionPaperGenerator and QuestionPaper and 
generates a question paper depending on the given criteria.

questionPaperGenerator.js: Contains the QuestionPaperGenerator class.
It implements ways of picking questions based on the available marks and the difficulty.

questionPaper.js : It produces the generated.json file containing the test paper information and
it also computes total score, marks breakdown depending on the difficulty level, and saves this information to the generated.json file.

questionStore.js: This comprises the loadQuestions function (to load questions from the specified file) and 
getQuestionsByDifficulty function (to retrieve questions based on the degree).

package.json: Holds project metadata and dependencies.

Data File - questions.json : An array of questions having subject, topic, difficulty and marks.

Output:
Once the project is done, the file generated.json is created. This is the file which contains the question paper that 
was generated using the data and logic provided by the project.

# Steps to run the Application
1. Clone the repository in your system.
2. Open your Terminal/CMD and move to the directory where the project is saved.
3. Run the application using the following command: "npm run start"
4. A message stating "Question Paper generated successfully " will appear in the terminal
5. You can see in the project folder that a file named 'generated.json' has been created which contains the question paper that 
was generated using the data and logic provided by the project.
