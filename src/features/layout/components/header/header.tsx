import React from 'react'
import HeaderMobile from '../header-mobile/header-mobile'
import { getAuth } from 'firebase-admin/auth'
import { cookies } from 'next/headers'
import initFirebaseAdmin from '@firebase/init-firebase-admin'

async function Header() {
  // const session = cookies().get('session')?.value

  // if (!session) return
  // initFirebaseAdmin()

  // const auth = getAuth()
  // const idToken = await auth.verifySessionCookie(session, true)

  // const user = await auth.getUser(idToken.uid)

  return (
    <>
      <HeaderMobile />
      {/* <p>{user.email}</p> */}
    </>
  )
}

export default Header
