//Creating the Objects inner here...
let oneTrello = {
    day : 'SaturDay',
    meetPeoples : 20,
    meetDone : 0,
    ignorePeoples : 2,

    meetings : function(num = 0){
        this.meetPeoples = this.meetPeoples - num
    },

    meetingsDone : function(){
        this.meetDone = this.meetPeoples - this.ignorePeoples
    },

    resetData : function(){
        this.day = 'SaturDay'
        this.meetPeoples = 0
        this.meetDone = 0
        this.ignorePeoples = 0
    },

    summary : function(){
        return `You got ${this.meetPeoples} meetings today!, and ${this.meetDone} is Done`
    }
}

//Lets Calling And Drive thoes Objects and Methods...
oneTrello.meetings(15)
oneTrello.meetingsDone()
///oneTrello.resetData()
console.log(oneTrello.summary())

//The Assignment___ **Handle MeetingDone,**Create Function that can Reset days.**
//Start From here...