function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

[Installation](#installation)\n
[Usage](#Usage)\n
[License](#License)\n
[Contributors](#Contributions)\n
[Tests](#Tests)\n
[Questions](#questions)\n

## Installation
${data.install}

## Usage
${data.usage}

## License 
${data.license}

## Contributions
${data.contributors}

## Tests
${data.tests}

## Questions
\n
You can reach me at ${data.email} or via GitHub [${
    data.username
  }](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
