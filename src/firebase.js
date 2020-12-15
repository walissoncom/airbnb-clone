import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAzg0CWbLiu7UO1N-hZdNGEBEz8Mr6gW2k",
    authDomain: "airbnb-clone-797cc.firebaseapp.com",
    projectId: "airbnb-clone-797cc",
    storageBucket: "airbnb-clone-797cc.appspot.com",
    messagingSenderId: "631026544000",
    appId: "1:631026544000:web:953ebc117af8c6849ee565"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;