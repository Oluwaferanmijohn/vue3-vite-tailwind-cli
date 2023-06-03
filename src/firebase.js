import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  // Your web app's Firebase configuration
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { db }
