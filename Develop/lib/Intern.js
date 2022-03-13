// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.school = 'Random School';
    }

    getName() {
        return this.first + this.last
    }

    getRole() {
        return this.role
    }

    getEmail() {
        return this.email
    }

    getId() {
        return this.id
    }

    getGithub() {
        return this.github
    }

    getSchool() {
        return this.school
    }


}

// const Intern1 = new Intern('Noob', 'Boob');
// console.log(Intern1)

module.exports = Intern;