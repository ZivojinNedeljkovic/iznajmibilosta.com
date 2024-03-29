import { initializeApp, getApps } from 'firebase/app'
import {
  getAuth,
  connectAuthEmulator,
  setPersistence,
  inMemoryPersistence,
} from 'firebase/auth'

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
export const auth = getAuth(firebaseApp)

setPersistence(auth, inMemoryPersistence)

// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
connectAuthEmulator(auth, 'http://127.0.0.1:9099')
