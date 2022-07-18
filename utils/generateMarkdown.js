// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description

## Table of Contents

[Installation](#installation)\n
\n[Questions](#questions)\n

## Installation
\`\`\`
${data.install}
\`\`\`

## Usage

## License 
${data.license}

## Questions

You can reach me at ${data.email} or via GitHub [${
    data.username
  }](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
