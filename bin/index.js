#!/usr/bin/env node

const { program } = require('commander');
const cli = require('../src/cli');

program
  .version('0.1.0')
  .command('init')
  .description('create a project')
  .action(function () {
    cli.init()
  });
 
program.parse(process.argv);