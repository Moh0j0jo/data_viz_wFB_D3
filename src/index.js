import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMw--Z3Zl-e-y1TUnXMmghE5Dd7Gl5ChE",
  authDomain: "udemy-d3-firebase-23286.firebaseapp.com",
  projectId: "udemy-d3-firebase-23286",
  storageBucket: "udemy-d3-firebase-23286.appspot.com",
  messagingSenderId: "124615150939",
  appId: "1:124615150939:web:2408f5cbfdc3b3b9a1de7e",
  measurementId: "G-F3K0M89R9G"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, 'expenses');

const form = document.querySelector('form');
const name = document.querySelector('#name');
const cost = document.querySelector('#cost');
const error = document.querySelector('#error');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  if (name.value && cost.value) {

    const item = { 
      name: name.value, 
      cost: parseInt(cost.value) 
    };

    addDoc(colRef, item)
      .then((res) => {
        error.textContent = '';
        name.value = '';
        cost.value = '';
        form.reset()
      })

  } else {
    error.textContent = 'Please enter values before submitting';
  }

});