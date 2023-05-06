import Axios, { AxiosInstance } from 'axios'
import { getCookie } from 'cookies-next'

const token = getCookie('access_token')

export const client: AxiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ORIGIN,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

export const setBearerToken = (token: string) => {
  client.defaults.headers.Authorization = `Bearer ${token}`
}
