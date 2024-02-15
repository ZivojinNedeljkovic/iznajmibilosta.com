'use client'
import React, { useEffect, useState } from 'react'
import trpc from './trpc-client'

function TestClient() {
  const [response, setResponse] = useState('')
  useEffect(() => {
    trpc.hello.query({ text: 'test' }).then(res => {
      setResponse(res.greeting)
    })
  }, [])
  return (
    <div>
      TestClient
      <p>{response}</p>
    </div>
  )
}

export default TestClient
