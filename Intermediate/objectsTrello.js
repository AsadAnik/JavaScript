//The Object Oriented Trello here...
let myTrello = {
    day : 'Monday',
    meetings : 0,
    meetDone : 0
}

//Some methods for extra addition..
let addMeetings = function(trello, meet = 0){
    trello.meetings = trello.meetings + meet
}

let meetDone = function(trello, meet = 0){
    trello.meetDone = trello.meetDone - meet
}

let reset = function(){
    trello.meetings = 0
    trello.meetDone = 0
}

let getSummary = function(trello){
    let meetingFinished = trello.meetings - trello.meetDone

    return `You have Done ${meetingFinished} meetings Today !`
}

//Calling the objects properties and methods....
addMeetings(myTrello, 10)
meetDone(myTrello, 5)
console.log(getSummary(myTrello))
