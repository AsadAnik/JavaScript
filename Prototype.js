//Prototype with Objects..
    class Asadanik{
        constructor(name, born, skill){
            this.name = name;
            this.born = born;
            this.skill = skill;
        }
    }

  //Created the Object...  
    let myObject = new Asadanik('Asad Anik', 2000, 'Software Engineer!')
    let anotherObj = new Asadanik('Alex Senchez', 1998, 'Footballer!')

 //Prototype objects,  functions and values with objects..
    Asadanik.prototype.getAge = function(present){
        return `Present Age is: ${present - this.born}\n`;
    }
    console.log(myObject.getAge(2020))

    Asadanik.prototype.age = 25;
    console.log(`Prototype Age: ${myObject.age}\n`)

 //With Object Prototype...
    Asadanik.prototype.objPro = {
        nickname: 'Anik',
        email: 's.engineer63@gmail.com',
        username: 'asadanik'
    }   
    let name = anotherObj.objPro.nickname;
    console.log('My nickname is : ', name)
    
    let id = myObject.objPro.email;
    console.log('ID is : ', id)


