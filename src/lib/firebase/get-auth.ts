import { getAuth as _getAuth } from 'firebase-admin/auth'

function getAuth() {
  return _getAuth().verifySessionCookie('')
}

export default getAuth
