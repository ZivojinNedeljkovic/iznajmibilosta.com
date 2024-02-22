import type { UserRecord } from 'firebase-admin/auth'

type User = Pick<
  UserRecord,
  'displayName' | 'email' | 'emailVerified' | 'phoneNumber' | 'photoURL' | 'uid'
>

export default User
