
//function determining the license badge
function renderLicenseBadge(license) {
  if (license === '') {
   return '';
  }
  else {return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](http://opensource.org/licenses/${license})`;}
}


function renderLicenseSection(license) {
  if (license === '') {
    return '';
  }
  else {return `This application is licensed by ${license}`;}
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

[Installation](#installation)\n
[Usage](#usage)\n
[License](#license)\n
[Contributors](#contributions)\n
[Tests](#tests)\n
[Questions](#questions)\n

## Installation
${data.install}

## Usage
${data.usage}

## License 
${renderLicenseSection(data.license)}

## Contributions
${data.contributors}

## Tests
${data.tests}

## Questions
\n
You can reach me at [${data.email}] or via GitHub [${
    data.username
  }](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
