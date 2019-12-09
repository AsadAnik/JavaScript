//The Object Oriented Programming part 3 on here...
let myPC = {
    brand : 'acer',
    model : 'swift-5',
    size : "14.6'",
    HDD : 1000,
    RAM : 8,
    CPU : 'core i7 8th Gen',
    bettary : 5000,
    graphicsCard : 'AMD 9',

    lifeTime : function(user){
        this.bettary = (this.bettary / user) * 100
        this.bettary = this.bettary - user
    },

    memoryTime : function(){
        this.RAM = (this.RAM / this.bettary) * 100
        this.RAM = this.bettary - this.RAM
    },

    performence : function(){
        return `Your RAM usage ${this.RAM}% & Bettary is ${this.bettary}mAh running`
    }
}

//So now calling the Object from here...
    myPC.lifeTime(500)
    myPC.memoryTime()
    console.log(`Your pc is ${myPC.brand} model is ${myPC.model}`)
    console.log(myPC.performence())