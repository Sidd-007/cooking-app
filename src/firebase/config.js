import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAPn_pPKzInGPkpfWxOnh47BnKu3LtqhEA",
    authDomain: "cooking-recipe-2b78d.firebaseapp.com",
    projectId: "cooking-recipe-2b78d",
    storageBucket: "cooking-recipe-2b78d.appspot.com",
    messagingSenderId: "667910142912",
    appId: "1:667910142912:web:decc99fd71ac0eac212625"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }