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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signinWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
