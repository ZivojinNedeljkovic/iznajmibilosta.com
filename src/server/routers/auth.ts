import { z } from 'zod'
import { procedure, router } from '../trpc'
import { cookies } from 'next/headers'
import { TRPCError } from '@trpc/server'
import { auth } from 'firebase-admin'
import initFirebaseAdmin from '@firebase/init-firebase-admin'

const authRouter = router({
  signIn: procedure
    .input(
      z.object({
        idToken: z.string(),
        csrfToken: z.string(),
      })
    )
    .mutation(async ({ input: { idToken, csrfToken } }) => {
      initFirebaseAdmin()
      const csrfTokenCookie = cookies().get('csrfToken')?.value ?? ''
      if (csrfToken !== csrfTokenCookie) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Invalid CSRF Token',
        })
      }

      // const expiresIn = 1000 * 60 * 5
      const expiresIn = 60 * 60 * 24 * 1000 * 14 // 14d
      const firebaseAuth = await auth()
      const sessionCookie = await firebaseAuth.createSessionCookie(idToken, {
        expiresIn,
      })

      cookies().set('session', sessionCookie, {
        maxAge: expiresIn,
        httpOnly: true,
        secure: true,
      })
    }),
})

export default authRouter
