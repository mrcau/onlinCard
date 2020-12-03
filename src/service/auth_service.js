import  firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService{
  login(prName){
    const provider = new firebase.auth[`${prName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(provider);
  }
}

export default AuthService;