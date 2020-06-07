/**
 * init
 */

'use strict';
const program = require('commander');
const inquirer = require('inquirer');

const { version } = require('../../package.json');
program.version(version);

const promptList = [{
    type: 'input',
    message: 'project name',
    name: 'projectName',
    default: "example"
}, {
    type: 'input',
    message: 'user name',
    name: 'username',
    default: "username"
}, {
    type: 'list',
    message: 'project type',
    name: 'projectType',
    choices: [
        "vue",
        "react",
        "es6"
    ],
    filter: function (val) {
        return val.toLowerCase();
    }
}];

const init = function () {
    inquirer.prompt(promptList).then(res => {
        console.log(res)
    })
}

module.exports = init;
