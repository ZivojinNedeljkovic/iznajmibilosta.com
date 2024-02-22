import { signInWithEmailAndPassword as _signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import trpc from '@lib/trpc/trpc-client'
import CsrfToken from '@auth/models/csrf-token'
import AppPage from '@navigation/config/app-pages'

async function signInWithEmailAndPassword(email: string, password: string) {
  const user = await _signInWithEmailAndPassword(auth, email, password)
  const idToken = await user.user.getIdToken()
  const csrfToken = CsrfToken.value
  await trpc.auth.signIn.mutate({ idToken, csrfToken })
  window.location.assign(AppPage.homePage)
}

export default signInWithEmailAndPassword
