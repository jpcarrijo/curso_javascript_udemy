import firebase from "../../node_modules/firebase/index";
import 'firevbase/firestore';

if(!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
    projectId: process.env.
  })
}