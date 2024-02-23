import UserData from '@auth/types/user'
import initFirebaseAdmin from '@firebase/init-firebase-admin'
import { getAuth } from 'firebase-admin/auth'
import { cookies } from 'next/headers'

async function getUserDataFromSession() {
  let user: UserData | null = null

  const session = cookies().get('session')?.value
  if (session) {
    initFirebaseAdmin()
    const auth = getAuth()
    try {
      const idToken = await auth.verifySessionCookie(session, true)
      const userRecord = await auth.getUser(idToken.uid)

      user = {
        uid: userRecord.uid,
        email: userRecord.email ?? null,
        emailVerified: userRecord.emailVerified,
        phoneNumber: userRecord.phoneNumber ?? null,
        photoURL: userRecord.photoURL ?? null,
        displayName: userRecord.displayName ?? null,
      }
    } catch (error: any) {
      console.log('error: ', error)
      console.log('error.code: ', error.code)
    }
  }
  return user
}

export default getUserDataFromSession
