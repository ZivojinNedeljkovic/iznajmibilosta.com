import {
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'
import { auth } from './firebase'

async function createUserWithEmailAndPassword(email: string, password: string) {
  const firebaseResult = await _createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  await sendEmailVerification(firebaseResult.user)
  auth.signOut()
  return firebaseResult
}

export default createUserWithEmailAndPassword
