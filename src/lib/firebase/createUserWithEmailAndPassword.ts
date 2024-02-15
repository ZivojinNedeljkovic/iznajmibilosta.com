import { createUserWithEmailAndPassword as _createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'

async function createUserWithEmailAndPassword(email: string, password: string) {
  const firebaseResult = await _createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  auth.signOut()
  return firebaseResult
}

export default createUserWithEmailAndPassword
