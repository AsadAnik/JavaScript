///The Tutorial of FirebaseDB(DataBase of Google). Nothing here to run with node or else,
//Just the overviews of the Database...
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAdxiW-G2wKU30i29-ygq8gdyE0mSJFXoE",
    authDomain: "form-test-cc5e8.firebaseapp.com",
    databaseURL: "https://form-test-cc5e8.firebaseio.com",
    projectId: "form-test-cc5e8",
    storageBucket: "form-test-cc5e8.appspot.com",
    messagingSenderId: "945511644582",
    appId: "1:945511644582:web:aa3715a018b65cb86ca367",
    measurementId: "G-969NHL88FT"
};

//Initialized the firebase configurations..
firebase.initializeApp(firebaseConfig);

//Maked Connection with App..
const firebaseDB = firebase.database();
firebaseDB.ref().set('DB CONNECTED!');

///Posting Data in Database..
firebaseDB.ref().set({
    name: 'Asad Anik',
    age: 19,
    skills: ['Javascript', 'Python', 'Php']
});

//Updating the Data...
firebaseDB.ref('skills/2').set('PHP');

//Adding the New Data..
firebaseDB.ref('expertsOn').set(['JS', 'React', 'Node']);

//Adding Data with Promises..
firebaseDB.ref('database').set('firebase')
    .then(() => console.log('I love firebase!'))
    .catch(e => console.log(e))

//Removing the Data...
firebaseDB.ref('skills').set(null);
//OR,
firebaseDB.ref('expertsOn/0').remove();

///Updating Database...
firebaseDB.ref().update({
    name: 'Asad',
    lastname: 'Majumder',
})

//Getting the Data once..
firebaseDB.ref().once('value')
    .then(snapshot => console.log('Onece Data -->>', snapshot.val()))
    .catch(error => console.log(error))

///Get Data by Multiple..
firebaseDB.ref().on('value', (snapshot) => {
    console.log('On Data -->>', snapshot.val())
})

///Going to lesoning the callback to prove its realtime database..
//Using JavaScript function..
setTimeout(() => {
    firebaseDB.ref('name').set('Expired!')
}, 3000)

//Make Off the get data method..
//After 5sec. it will make disable to get user console DB's Data..
// setTimeout(() => {
//     firebaseDB.ref().off()
// }, 5000)

///Get Data with Removed Data from Database...
firebaseDB.ref().on('child_removed', (snap) => {
    console.log(`Removed -- ${snap.key}: ${snap.val()}`)
})

///Get Data with Added Data on Database..
firebaseDB.ref().on('child_added', (snap) => {
    console.log(`Added -- ${snap.key}: ${snap.val()}`)
})

///Get Data with Changed Data on Database..
firebaseDB.ref().on('child_changed', (snap) => {
    console.log(`Changed -- ${snap.key}: ${snap.val()}`)
})

///Creating the Push Object for database...
firebaseDB.ref('users').push({
    name: 'Asaad',
    age: 25,
    passion: 'Engineer'
})

//Operation with the persons data..
firebaseDB.ref('users').orderByChild('age').once('value')
.then(snapshots => {
    let pushOnArr = [];

    snapshots.forEach(snaps => {
        pushOnArr.push({
            id: snaps.key,
            ...snaps.val()
        })
    })
    console.log(pushOnArr)
})
.catch(error => console.log(error))