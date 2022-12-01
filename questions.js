const questions = [
    {
       type: 'input',
       name: 'title',
       message: 'What is the title of the project?'
    },
    {
       type: 'input',
       name: 'discription',
       message: 'What is the discription of the project?'
    },
    {
       type: 'input',
       name: 'installation',
       message: 'What installations are required?'
    },
    {
       type: 'input',
       name: 'usage',
       message: 'How is the application used?'
    },
    {
       type: 'list',
       name: 'license',
       message: 'Which license does the application used?',
       choices: ['MIT', 'ISC', 'None' ]
    },
    {
       type: 'input',
       name: 'contribute',
       message: 'Who contributed?'
    },
    {
       type: 'input',
       name: 'test',
       message: 'What testing are required?'
    },
    {
       type: 'input',
       name: 'email',
       message: 'What is your email?'
    },
    {
       type: 'input',
       name: 'github',
       message: 'What is your github username?'
    }

];

module.exports = questions;