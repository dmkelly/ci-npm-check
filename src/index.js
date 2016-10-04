#! /usr/bin/env node

const npmCheck = require('npm-check');
const chalk = require('chalk');

const PATCH = 'patch';

function warn (...args) {
  global.console.warn(chalk.bold.yellow('WARN'), ...args);
}

function run () {
  npmCheck().then((currentState) => {
    const packages = currentState.get('packages');
    let hasWarnings = false;
    packages.forEach(pkg => {
      const { moduleName, isInstalled, installed, latest, bump } = pkg;
      if (isInstalled && installed !== latest && bump !== PATCH) {
        warn(`${moduleName}@${installed} is outdated. Latest is ${latest}`);
        hasWarnings = true;
      }
    });

    if (hasWarnings) {
      global.console.info('Exited with WARNINGS');
    }
  });
}

run();
