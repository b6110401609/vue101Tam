import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC7CSukvM6v2qnsEZoDBckT9G7MAQ80tb0",
    authDomain: "vue101-54301.firebaseapp.com",
    databaseURL: "https://vue101-54301.firebaseio.com",
    projectId: "vue101-54301",
    storageBucket: "vue101-54301.appspot.com",
    messagingSenderId: "616321604990",
    appId: "1:616321604990:web:1958feaa8946437c6d672f",
    measurementId: "G-T3M5D0LNN3"
};
const app = firebase.initializeApp( firebaseConfig )

export const db = app.firestore()
export const todosCollection = db.collection('todos')


