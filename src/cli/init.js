/**
 * init
 */

'use strict';

const clone = require('git-clone');
const program = require('commander');
const inquirer = require('inquirer');
const shell = require('shelljs');
const log = require('tracer').colorConsole();

const { version } = require('../../package.json');
program.version(version);

const remotePro = {
    vue: 'vue-webpack-demo',
    react: 'react-webpack-demo'
}

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
        "react"
    ],
    filter: function (val) {
        return val.toLowerCase();
    }
}];

const init = function () {
    inquirer.prompt(promptList).then(res => {
        if (!res.projectType) log.error('error type.');

        let pwd = shell.pwd();

        clone(`https://github.com/ZhiCYue/${remotePro[res.projectType]}.git`, pwd + `/${res.projectName}`, null, function (error) {
            if (error) {
                log.error('error: ', error);
                return;
            }
            shell.rm('-rf', pwd + `/${res.projectName}/.git`)
            log.info('初始化成功!');
        })
    })
}

module.exports = init;
