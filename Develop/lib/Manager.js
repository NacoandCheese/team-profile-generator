// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(firstName, lastName) {
        super(firstName, lastName)
        this.officeNumber = Math.floor(Math.random() * 100);
    }

    //methods
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

    getOfficeNumber() {
        return this.officeNumber
    }
    
}

// const Manager1 = new Manager ('Simon', 'Says');
// console.log(Manager1)


module.exports = Manager