import 'server-only'
import admin from 'firebase-admin'

function initFirebaseAdmin() {
  if (!process.env.FIREBASE_ACCOUNT_KEY)
    throw new Error('Missing env.FIREBASE_ACCOUNT_KEY')

  const accountKey = JSON.parse(process.env.FIREBASE_ACCOUNT_KEY)

  if (admin.apps.length > 0) {
    return admin.app()
  }

  return admin.initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  })
}

export default initFirebaseAdmin
