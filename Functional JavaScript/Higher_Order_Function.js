//The Higher Order Function...
    let arr = ['Asad Anik', 'School', 'collage']

    arr.forEach((user) => {
        console.log(user)
    })

    var caller = function(){
        return function(a){
            return `I am ${a} for you!`;
        }
    }

    var x = caller()('asad')
    console.log(x)