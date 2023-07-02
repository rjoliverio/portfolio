import { useMutation, useQuery } from '@tanstack/react-query'
import { client } from '../lib/client'
import { IUser } from '../interface/IUser'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/router'

const useAuth = () => {
  const router = useRouter()
  const handleAuthRedirect = () =>
    useQuery({
      queryKey: ['AUTH_REDIRECT'],
      queryFn: async () => await client.get('/api/redirect'),
    })

  const handleAuthCallback = (url: string) =>
    useQuery({
      queryKey: ['AUTH_CALLBACK'],
      queryFn: async () => await client.get(url),
    })

  const handleCheckAuth = () =>
    useQuery({
      queryKey: ['CHECK_AUTH'],
      queryFn: async () => (await client.get('/api/auth')).data,
      enabled: true,
      select: (data: IUser) => data,
    })

  const handleAuthSignout = () =>
    useMutation({
      mutationFn: async () => await client.post('/api/logout'),
      onSuccess: () => {
        deleteCookie('access_token')
        router.reload()
      },
    })
  return { handleAuthRedirect, handleAuthCallback, handleCheckAuth, handleAuthSignout }
}

export { useAuth }
