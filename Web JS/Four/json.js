alert('Connected json!');
//The Json practice area inner here...
const student = {
    name : 'john',
    age : 23,
    height : '5.7',
    weight : '70KG'
}

//Convert this object/JSON into String..
const studentObjToString = JSON.stringify(student);

console.log(typeof studentObjToString);
localStorage.setItem('student', studentObjToString);
// console.log(localStorage.getItem('student'));

//Convert String to JSON....
const stringToJson = JSON.parse(studentObjToString);
console.log(typeof stringToJson);
localStorage.setItem('student', stringToJson);

//Access the things inner from json or object..
    console.log('Name is ',stringToJson.name);
    console.log('Age is ',stringToJson.age);
    console.log('Height is ',stringToJson.height);