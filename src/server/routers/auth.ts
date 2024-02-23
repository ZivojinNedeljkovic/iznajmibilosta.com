import { z } from 'zod'
import { procedure, router } from '../trpc'
import { cookies } from 'next/headers'
import initFirebaseAdmin from '@firebase/init-firebase-admin'
import { v4 as uuidv4 } from 'uuid'
import { getAuth } from 'firebase-admin/auth'
import { TRPCError } from '@trpc/server'

const authRouter = router({
  signIn: procedure
    .input(
      z.object({
        idToken: z.string(),
      })
    )
    .mutation(async ({ input: { idToken } }) => {
      initFirebaseAdmin()
      const sessionMaxAge = 60 * 60 * 24 * 1000 * 14 // 14d
      const firebaseAuth = getAuth()
      let sessionCookie = ''
      try {
        sessionCookie = await firebaseAuth.createSessionCookie(idToken, {
          expiresIn: sessionMaxAge,
        })
      } catch (error) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          cause: process.env.ENVIRONMENT === 'development' ? error : undefined,
        })
      }

      const csrfToken = uuidv4()
      const cookieList = cookies()

      cookieList.set('session', sessionCookie, {
        httpOnly: true,
        secure: true,
        maxAge: sessionMaxAge,
      })

      cookieList.set('csrfToken', csrfToken, {
        httpOnly: true,
        secure: true,
        maxAge: sessionMaxAge,
      })

      return { csrfToken }
    }),
})

export default authRouter
