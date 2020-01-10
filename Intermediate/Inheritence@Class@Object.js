//Creating the class..
class User{
    constructor(firstName, lastName, age, username, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.username = username;
        this.password = password;
    }

    setFullName(userOne, userTwo){
        this.firstName = userOne;
        this.lastName = userTwo;
    }
    getFullName(){
        return `Full Name is ${this.firstName+' '+this.lastName}`;
    }


    editName(userMiddleName){
         var firstOne = this.firstName;
         var middleOne = userMiddleName;
         var lastOne = this.lastName;

         return `First name is ${firstOne}, Middle name is ${middleOne} and Last Name is ${lastOne}`;
    }
}

const UserAccount = new User('Asad', 'Anik', 20, 'asadanik', '@@1211##');

UserAccount.setFullName('Asad', 'Anik');
    console.log(UserAccount.getFullName());
    console.log(UserAccount.editName('Hossan'));


//Inherited Class inner here...
class Teacher extends User{
    constructor(firstName, lastName, age, username, password, subject, experience){
        super(firstName, lastName, age, username, password);

        this.subject = subject;
        this.experience = experience;
    }

  //Overrided the method...  
    getFullName(){
        return `Full Name is ${this.firstName+' '+this.lastName} and I teach ${this.subject}`;
    }

    favDrink(name){
        console.log(`My Fav. drink is ${name}!`);
    }
}    

const AnotherUser = new Teacher('Hitesh', 'Chudhory', 33, 'hiteshchudhory', '@#@#@#@#1212', 'python', '10years');

console.log(AnotherUser.getFullName());
AnotherUser.favDrink('CocaChola');