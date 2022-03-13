// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')
//This is how to inherit from employee class
class Engineer extends Employee {
    constructor(firstName, lastName) {
        //super is a keyword that inherits from Employee
        super(firstName, lastName)
        this.github = `github.com/${firstName}`;

    }

    //methods
    getName() {
        return this.first + this.last
    }

    getRole() {
        return this.role = 'Engineer'

    }

    getEmail() {
        return this.first + this.last + '@mycompany.com'

    }

    getId() {
        return this.id

    }

    getGithub() {
        return this.github

    }
}

// const Engineer1 = new Engineer('Mark', 'Guy');
// // console.log(Engineer1)
// console.log(Engineer1.getName())

// const Engineer1 = new Engineer ('Poop', 'Head');
// console.log(Engineer1)
// console.log(Engineer1.getGithub())

module.exports = Engineer