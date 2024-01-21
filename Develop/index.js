const inquirer = require('inquirer');
const fs = require('fs');
const { default: ListPrompt } = require('inquirer/lib/prompts/list');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please decribe your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'instructions',
    },
    {
      type: 'input',
      message: 'What is the usefulness of your project?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Please enter your email address',
      name: 'email',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: [
        'Apache License 2,0',
        'MIT',
        'Boost Software License 1.0',
        'Eclipse Public License 2.0',
        'BSD 2-CLAUSE Licence',
        'NONE',
      ]
      
    },


  ])
  .then((response) =>{
    fs.writeFileSync('./output/readme.md',`
 # ${response.title}
 ![](https://img.shields.io/badge/javascript-${response.license}-yellow)

## Description
   
  ${response.description}


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)
- [Tests](#tests)

## Installation

  ${response.instructions}



## Usage

  ${response.usage}


## License

This project is licensed under the terms of the ${response.license} .

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, caste, color, religion, or sexual
identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
* Focusing on what is best not just for us as individuals, but for the overall
  community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or advances of
  any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or email address,
  without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

## Questions

For more information click this link to my github profile : https://github.com/-${response.username}  
Or, email me at : ${response.email}


## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
    `)
    console.log('Success!')
  })
