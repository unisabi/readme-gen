const { prompt } = require('inquirer');
const questions = require('./questions');
const mdGen = require('./generateMarkdown');

prompt(questions).then(mdGen)