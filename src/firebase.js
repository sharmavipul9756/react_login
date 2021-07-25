import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey:process.env.REACT_APIKEY,
    authDomain: process.env.REACT_AUTHDOMAIN,
    databaseURL:process.env.REACT_DATABASEURL,
    projectId:process.env.REACT_PROJECTID,
    storageBucket: process.env.REACT_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_MESSAGEINGSENDERID,
    appId: process.env.REACT_APIID,
    measurementId: process.env.REACT_MEASUREMENTID
})

export const auth = app.auth()
export default app;