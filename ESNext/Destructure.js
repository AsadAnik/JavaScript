///lets do some destructures with javascript...
let arr = [12, 23, 34, 90];

///DeStruct with this array..
let [a, b, c, d, e] = arr;
console.log(d)

///DeStructure with an Objects...
let obj = {
    name: "Asad Anik",
    age: 19,
    passion: "Software Expert"
}

//Done DeStructured with the Object..
let {age, passion} = obj;
console.log(passion, age)

///Another example for deStructuring of the variable from object...
let WEATHER_APP = {
  today: 77,
  tomorrow: 20,
  yesterday: -10
}
//restoring the destructured value for the new variable...
const { today: highToday, tomorrow: highTomorrow } = WEATHER_APP;
console.log('Todays Weather ', highToday+' '+'degree')
console.log('Tomorrow weather will ', highTomorrow+' '+'degree')

///another one example for the destructuring method...
//creating the nested object and working with this object..
let CRIME_REPORTS = {
  successfull_criminal: {
      name: 'Bill Gates',
      age: 19,
      year: 1979,
      status: 'old'
  }
};

//lets deStructuring this object from nested...
const { successfull_criminal: {name, status} } = CRIME_REPORTS;
console.log(`criminal is ${name}, crime is ${status}`)

//Again DeStructuring with another way of very wird thing...
let aa = 8, bb = 6;
// [aa, bb] = [bb, aa];
[bb, aa] = [aa, bb];
console.log(`aa = ${aa} \nbb = ${bb}`)


///Another Example of Destruct Functions Perameters from Object...
///Feel with the function and destructing the parameters...
//The Object..
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

///Destruct the Obeject as a functions parameter...
const half = ({ max, min }) => (max + min) / 2.0;

///use Function and showking the output..
const usefunction = half(stats);
console.log(usefunction);