# ci-npm-check

Wrapper to enable npm-check for Jenkins jobs

Add this module as part of a [Jenkins](https://jenkins.io/) job to enable warnings
if the project has outdated modules.

## Usage

Add the following shell step to a Jenkins job for your node project:

```
npm install dmkelly/ci-npm-check
./node_modules/.bin/ci-npm-check
```

Then use the [Text-finder Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Text-finder+Plugin) to make the build unstable if the output of `ci-npm-check` matches a given regular expression.

```
/WARNINGS/
```
