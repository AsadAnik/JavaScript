///The Another one for the value of the sorting way on this javascript...
    let numbers = [12,23,34,56,65,67,76,78,87,89,98,90,21,32,43];


    console.log(numbers.sort());

 //Done with Array function...
    let compareValue = numbers.sort((a, b)=>{
          console.log('Sortng a/b : ',a, b);
            if(a < b) return 1;
            else if(a > b) return -1;
            else return 0;
    });

    console.log(compareValue);

  //with an objects lets start inner of there...
  let peoples = [{
    name : 'Asad Anik',
    age : 19,
    profession : 'Software Engineer!'

  }, {
    name : 'JulkarNine',
    age : 29,
    profession : 'Software Expert!'

  }, {
    name : 'Hitesh Chowdhory',
    age : 30,
    profession : 'Programer'

  }];  

  let peoplesSort = peoples.sort((a, b)=>{

    a = a.age;
    b = b.age;

        if(a < b)
            return 1;
        else if(a > b)
            return -1;

        return 0;
  });

  console.log(peoplesSort);

