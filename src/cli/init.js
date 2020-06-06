/**
 * init
 */

'use strict';
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'Project Name:',
        default: function () {
            return 'my-project'
        }
    },
    {
        type: 'input',
        name: 'author',
        message: 'Author:'
    }
]

const init = function () {
    inquirer.prompt(questions).then(({ project, author }) => {
        console.log(project, author)
    })
}

module.exports = init;
