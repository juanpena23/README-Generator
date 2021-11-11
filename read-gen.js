//node modules
const inquirer = require('inquirer');
const { retry } = require('rxjs');
const fs = require = ('fs');

//unquirer for generating questions
inquirer.prompt(
    [
        {
            type: 'input',
            message:"What's the Project title?",
            name:'title',
            //check that the user privided a value 
            ValidityState: (value)=>{if(value){return true} else{return 'i need a value to continue'}}
        },
        {
            type: 'input',
            message:"how do you install your app?",
            name: 'installation',
            ValidityState: (value)=> {if(value){return true} else{return 'i need a value to continue'}}
        },
        {
            type: 'input',
            message:"instructions to follow?",
            name: "instructions",
            ValidityState: (value)=> {if(value){return true} else{return 'i need a value to continue'}}
        },
        {
            type: 'input',
            message:"any credits?",
            name: 'credits',
            ValidityState: (value)=> {if(value){return true} else{return 'i need a value to continue'}}
        },
        {
            type: 'input',
            message:"how do you use your app?",
            name: 'usage',
            ValidityState: (value)=> {if(value){return true} else{return 'i need a value to continue'}}
        },
        {
            //list of licenses
            type: 'list',
            message:"what license did you used?",
            name: 'license',
            choices: ['The MIT License', 'The GPL License', 'Apache LIcense', 'GNU License', 'N/A'],
            ValidityState: (value)=> {if(value){return true} else{return 'i need a value to continue'}}
        },
        {
            type: 'input',
            message: 'Github Username:',
            name: 'git',
            ValidityState: (value)=> {if(value){return true} else{return 'i need a value to continue'}}
        },
        {
            type: 'input',
            message: 'E-mail:',
            name:'email',
            ValidityState: (value)=> {if(value){return true} else{return 'i need a value to continue'}},
        }
    ]
) .then(({
    title,
    installation,
    instructions,
    credits,
    license,
    git,
    email,
    usage,
    contribution,
})=>{
//template
const template = ` ${title}
*[Installation] (#installation)
*[Usage] (#usage)
*[contribution] (#contribution)
*[Credits] (#credits)
*[License] (#license)
#Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
### instuctions
${instructions}
## Credits
${credits}
## License
${license}

#Contact
*GitHub: ${git}
*E-mail: ${email}`;
// function to create the file 
createNewFile(title,template);
}
);
function createNewFile(fileName,data){
    //fs
    fs.writeFile(`./${fileName.toLowerCase().split('').join('')}md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your README has been created');
    })
}
