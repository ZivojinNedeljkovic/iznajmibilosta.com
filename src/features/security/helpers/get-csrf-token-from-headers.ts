import 'server-only'
import { headers } from 'next/headers'

function getCsrfTokenFromHeaders() {
  const csrfToken = headers().get('csrfToken')
  if (!csrfToken) throw new Error('csrfToken cookie is not set')
  return csrfToken
}

export default getCsrfTokenFromHeaders
