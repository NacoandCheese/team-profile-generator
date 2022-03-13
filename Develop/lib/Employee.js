// TODO: Write code to define and export the Employee class

//Employee class holds attributes and functions about EMPLOYEES
class Employee {
    constructor(firstName, lastName) {
        //these are attributes of employee
        this.first = firstName
        this.last = lastName
        this.email = this.first + this.last + '@mycompany.com'
        this.id = Math.floor(Math.random() * 1000)
        this.role = 'Employee'
    }

    //methods
    getFullName() {
        //return full name
        return this.first + this.last
    }
}
//Creating test Employees
//instachiating new class object
// const Employee1 = new Employee('Nico', 'Danna')

// console.log(Employee1)

// const Employee2 = new Employee('Erich', 'Purpur');

// console.log(Employee2)


// Employee1.getFullName()
// console.log(Employee1.getFullName())
// console.log(Employee1.email)



module.exports = Employee