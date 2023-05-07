import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'

export const useAuthCheck = () => {
  const [loginUser, setLoginUser] = useState<{ username: string; email: string } | null>(null);
  const router = useRouter()

  // Checking token
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) router.push('/login')
    if (typeof token !== 'string') return
    if (typeof process.env.NEXT_PUBLIC_SECRET_KEY !== 'string') return

    try {
      // Checking token
      const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)
      if (typeof decoded === 'string') return

      const { username, email } = decoded
      setLoginUser({ username, email })

    } catch (error) {
      router.push('/login')
    }
  }, [router])

  return loginUser
}

