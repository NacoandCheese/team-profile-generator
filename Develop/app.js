const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// const newEngineer1 = new Engineer('Jane', 'Creed');
// console.log(newEngineer1)

// const newManager1 = new Manager('Simon', 'Says');
// console.log(newManager1)

// const newIntern1 = new Intern('New', 'Guy');
// console.log(newIntern1)
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter first name'
        },

        {
            type: 'input',
            name: 'lastname',
            message: 'Enter last name'
        },

        {
            type: 'list',
            name: 'role',
            message: 'Select team member role',
            choices: [
                'Engineer',
                'Intern',
                'Manager'
            ]
        }
    ]);
};

promptUser()
    //returns an data object
    .then((answers) => {
        // if user selects Engineer 
        if (answers.role === 'Engineer') {

            console.log('now creating new engineer')
            //This creates an engineer object
            const Engineer1 = new Engineer(answers.name, answers.lastname);
            console.log(Engineer1)
        } else if (answers.role === 'Manager') {
            console.log('now creating a new Manager')
            //This creates a Manager object
            const Manager1 = new Manager(answers.name, answers.lastname);
            console.log(Manager1)
        } else if (answers.role === 'Intern') {
            console.log('now creating new intern')
            //This creates Intern object
            const Intern1 = new Intern(answers.name, answers.lastname);
            console.log(Intern1)
        }
    
    })    
