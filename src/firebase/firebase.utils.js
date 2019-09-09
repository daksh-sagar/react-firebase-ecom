import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBlRDgGsORtakwOlY_otfJ6jre9Zp5H_zU',
  authDomain: 'crwn-db-b4478.firebaseapp.com',
  databaseURL: 'https://crwn-db-b4478.firebaseio.com',
  projectId: 'crwn-db-b4478',
  storageBucket: '',
  messagingSenderId: '561631480247',
  appId: '1:561631480247:web:f2041f2ede490edfcd8032'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signinWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
