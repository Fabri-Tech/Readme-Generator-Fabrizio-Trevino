function LicenseBadge(license) { //this will give the badge of the licence selected
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case "GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
    default:
      return "";
  }
}


function LicenseSection(license) {
  if (!license || license === "None") {
    return "";
  }
  return `## License
This MD file will  use the ${license} license. `;
}


// this will generate the MD file
function generateMarkdown(data) {
  return `# ${data.title}
${LicenseBadge(data.license)}

## Description
${data.description}  


## How to instal the program 
${data.installation}

## How to use it
${data.usage}

${LicenseSection(data.license)}

## Who are the people contributing to this project
${data.contributing}

## Trial and error
${data.tests}

## Inquiries
If you have any inquiry, please reach out to me on GitHub at [${data.github}](https://github.com/${data.github}) or by email at ${data.email}.
`;
}

module.exports = generateMarkdown;
