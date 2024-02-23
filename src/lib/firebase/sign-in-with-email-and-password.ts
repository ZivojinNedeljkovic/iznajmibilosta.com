import { signInWithEmailAndPassword as _signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import trpc from '@lib/trpc/trpc-client'
import UserData from '@auth/types/user'

async function signInWithEmailAndPassword(email: string, password: string) {
  const userCredential = await _signInWithEmailAndPassword(
    auth,
    email,
    password
  )
  const idToken = await userCredential.user.getIdToken()
  const { csrfToken } = await trpc.auth.signIn.mutate({ idToken })

  const { uid, emailVerified, displayName, phoneNumber, photoURL } =
    userCredential.user

  const userData: UserData = {
    uid: uid,
    emailVerified: emailVerified,
    displayName: displayName,
    email,
    phoneNumber: phoneNumber,
    photoURL: photoURL,
  }

  return { user: userData, csrfToken }
}

export default signInWithEmailAndPassword
