/*The Example of the class and object again review*/
class User{

    constructor(firstname, lastname, credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }

    getFullName(){        
        return `${this.firstname} ${this.lastname} is my full name`;
    }

    customName(newname){
        const myName = newname.split(' ');
        this.firstname = myName[0];
        this.lastname = myName[1];
    }
}//END of the User Class..

const john = new User('Cena', 'Advance', 30);

console.log(john.firstname);
console.log(john.credit);
console.log(john.getFullName());

john.customName('Asad Anik');
console.log(john.getFullName());