const { prompt } = require('inquirer');
const questions = require('./questions');
const generateMarkdown = require('./generateMarkdown');

prompt(questions).then(generateMarkdown)