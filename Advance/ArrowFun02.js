//Part 02 of ArrowFunction to understanding......
const myCam = {
    price : 2000,
    weight : '340g',

    myDes : function(){
        return `This Camera is about ${this.price}$`
    },

  //Other way of write object function...  
    yourDes(){
        return `Hey man this is yourDes`
    },
}

    console.log(myCam.myDes())
    console.log(myCam.yourDes())

///One Arrow Function Only Using for Redux......
    const Reduxfun = () => ({key : 'value'})    
    console.log(Reduxfun())