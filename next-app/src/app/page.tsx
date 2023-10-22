"use client"

import router from 'next/router';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main>
      <label className="form-label">login</label>
      <input type="email" className="form-control w10" placeholder="name@example.com"></input>
      <Button variant="primary" onClick={() => router.push('/todo')}>
        submit
      </Button>
    </main>
  )
}