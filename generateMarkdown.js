const { writeFile } = require("fs");

function generateMarkdown(data) {
  let output = `
  # ${data.title}

  ${data.license == 'None' ? '' : `![LICENSE](https://img.shields.io/badge/LICENSE-${data.license}-success)`}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
 ${data.installation}
  
  ## Usage
  
 ${data.usage}
  

  ## Credits
  
 ${data.contribute}
  
  ## License
  
  ${data.license}
  
  ## Tests
  
  ${data.test}
  
  ## Any Questions or Concerns I can be reached at
  
  [Email](mailto:${data.email})

  [GitHub](https://github.com/${data.github})`;

  writeFile("./README.md", output, (err) => {
    if (err) throw err;
    console.log("README.md generated!!!");
  });
}

module.exports = generateMarkdown;
