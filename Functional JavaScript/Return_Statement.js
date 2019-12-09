///Return Statement...    
    function getName(firstname, secondname, gender){
        if(gender === 'male'){
            return `Mr.${firstname} ${secondname}`;

        }else if(gender === 'female'){
            return `Ms.${firstname} ${secondname}`;
        }
    }

    var fullName = getName('Asad', 'Anik', 'male')
    console.log(fullName);

 //Another Example..
    function example(){
        return{
            name: 'Steven Jobs',
            skill: ['python', 'javascript'],
            print: function(){
                console.log(this.name, this.skill);
            }
        }
    }
    
    var obj = example()
    obj.print();
    
