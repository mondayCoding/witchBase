import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
const config = {
	apiKey: '',
	authDomain: 'witchnode.firebaseapp.com',
	databaseURL: 'https://witchnode2.firebaseio.com',
	projectId: 'witchnode2',
	storageBucket: 'witchnode2.appspot.com',
	messagingSenderId: ''
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
