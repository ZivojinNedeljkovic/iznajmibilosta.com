import Image from 'next/image'
import React from 'react'

type Props = {
  children: React.ReactNode
}

function AuthLayout({ children }: Props) {
  return (
    <div
      style={{
        position: 'relative',
        paddingTop: 20,
        backgroundColor: '#CDEEEE',
      }}
    >
      {children}
      {/* <Image
        src="/images/background-2.jpg"
        alt="abstract network image"
        fill
        style={{ objectFit: 'cover', zIndex: -1 }}
        priority
      /> */}
    </div>
  )
}

export default AuthLayout
