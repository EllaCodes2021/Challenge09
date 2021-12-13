const licenceObj = {
  'MIT': {
    lisc: 'MIT',
    url: 'mit'
  },
  'BSD': {
    lisc: 'BSD',
    url: 'bsd-2-clause'
  },
  'Apache 2.0': {
    lisc: 'Apache%202.0',
    url: 'apache-2.0'
  },
  'GNU GPLv3': {
    lisc: 'GNU%20GPLv3',
    url: 'gpl-3.0'
  },
  'Mozilla Public License 2.0': {
    lisc: 'Mozilla%20Public%20License%202.0',
    url: 'mpl-2.0'
  },
  'ISC License': {
    lisc: 'ISC%20License',
    url: 'isc'
  },
  'The Unlicense': {
    lisc: 'The%20Unlicense',
    url: 'unlicense'
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // figure out how to use shield.io to generate badges after class
  // licenseTest = license.replaceAll(" ", "%20")
  return `![GitHub license](https://img.shields.io/badge/license-${licenceObj[license].lisc}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var gimme = licenceObj[license];
  // console.log(gimme);
  // console.log(gimme.lisc);
  console.log(gimme.url);


return `https://choosealicense.com/licenses/${licenceObj[license].url}/`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  
  
  ${data.description} 

  ## Table of Contents (Optional)
  
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [Questions](#questions)
  * [Contributing](#Contributing)
  * [Test](#test)
  
  

  ## Installation
  
  ${data.installation} 
  
  ## Usage 
  
  
  ${data.usage} 
  
  
  ## Credits
  
  ${data.credits} 
  
  ## License
  
  ${data.license}   
  ${renderLicenseLink(data.license)}
  ---
  
  
  ## Badges
  ${renderLicenseBadge(data.license)}.
  
  ## Features
  
  ${data.features} 

  ## Questions
  If you have any questions please contact me
  My Email: ${data.contactMeE} 
  My Github: ${data.contactMeG} 

  ## Contributing
  
  ${data.contributors} 

  ## Tests
  ${data.test} 
  
`;

}

module.exports = generateMarkdown;
