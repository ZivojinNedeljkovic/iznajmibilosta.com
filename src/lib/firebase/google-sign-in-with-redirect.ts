import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { auth } from './firebase'

function googleSignInWithRedirect() {
  const provider = new GoogleAuthProvider()
  return signInWithRedirect(auth, provider)
}

export default googleSignInWithRedirect
