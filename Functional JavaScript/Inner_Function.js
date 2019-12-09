//Inner Function...
    function outerFuntion(){
        var a = 0;

        function innerFunction(){
            a = 1;
            console.log('I am Inner Function!');
        }

        innerFunction()

        console.log('I am Outer Function!');
    }

    outerFuntion()

 //Another Big Example of Inner Function...
    function add(a, b){

        function sum(){
            return a+b
        }
        function sub(){
            return a-b
        }
        function mul(){
            return a*b
        }
        function div(){
            return a/b
        }

        return sum()+ sub()+ mul()+ div()
    }    

    console.log(add(10, 5));
    