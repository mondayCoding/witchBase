import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
const config = {
	apiKey: 'AIzaSyBGOQOBORSI5v4UtAfWgG5dzNoIgr-RSbQ',
	authDomain: 'witchnode.firebaseapp.com',
	databaseURL: 'https://witchnode.firebaseio.com',
	projectId: 'witchnode',
	storageBucket: 'witchnode.appspot.com',
	messagingSenderId: '44369258551'
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
