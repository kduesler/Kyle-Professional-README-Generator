// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "I do not want to use a license") {
    return "";
  } else {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "MPL_2.0") {
    return "https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "Apache_2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}

# ${data.title}
  
## Description
${data.description}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#contact-information)
  
## Installation
${data.install}

## Usage
${data.usage}

## License
${data.license}

${renderLicenseLink(data.license)}

## Contributing
${data.contribute}

## Tests
${data.tests}

## Contact Information
GitHub username: [${data.GitHub}](github.com/${data.GitHub})
Email: ${data.email}

Use the email address above to reach the developer with any additional questions you have about this project.

`;
}

module.exports = generateMarkdown;
