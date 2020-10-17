import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';

const config = {
  apiKey: "AIzaSyD6iCJOfH-bZfke4m2bJ3sK7cxeCNmrv1s",
    authDomain: "netflix-91139.firebaseapp.com",
    databaseURL: "https://netflix-91139.firebaseio.com",
    projectId: "netflix-91139",
    storageBucket: "netflix-91139.appspot.com",
    messagingSenderId: "1089453236522",
    appId: "1:1089453236522:web:773a249f9418430c243e53"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };