import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from './firebase'
import CsrfToken from '@auth/models/csrf-token'
import trpc from '@lib/trpc/trpc-client'

async function googleSignInWithPopup() {
  const provider = new GoogleAuthProvider()

  const response = await signInWithPopup(auth, provider)
  const idToken = await response.user.getIdToken()
  const csrfToken = CsrfToken.value
  await trpc.auth.signIn.mutate({ idToken, csrfToken })
  await auth.signOut()
}

export default googleSignInWithPopup
