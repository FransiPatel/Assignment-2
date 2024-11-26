// Task 4: Write a JavaScript program that creates a class called University with properties for university
// names and departments. Include methods to add a department, remove a department, and display all
// departments. Create an instance of the University class and add and remove departments.

class University {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }
    addDepartment(departments){
        if (!this.departments.includes(departments)){
            this.departments.push(departments);
            console.log(`Department ${departments} added to list`);
        }
        else{
            console.log(`Department ${departments} already exists in list`);
        }
    }
    removeDepartment(departments){
        const index = this.departments.indexOf(departments);
        if (index !== -1) {
            this.departments.splice(index, 1);
            console.log(`Department ${departments} removed.`);
        } else {
            console.log(`Department ${departments} does not exist.`);
        }
    }
    allDepartments(){
        if (this.departments.length > 0) {
            console.log(`Departments in ${this.name} are`)
            this.departments.forEach((department, index) => {
                console.log(department);
            });
        } else {
            console.log("No departments in class.");
        }
    }
}

let obj1 = new University("ABCD");
obj1.addDepartment("Computer Science");
obj1.addDepartment("Maths");
obj1.addDepartment('Physics');
obj1.addDepartment('Maths');
obj1.removeDepartment('Maths');
obj1.allDepartments();